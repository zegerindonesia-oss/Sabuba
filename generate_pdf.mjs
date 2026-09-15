import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const PORT = 8899;
const DEBUG_PORT = 9444;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
};

async function main() {
  console.log('--- GENERATING OFFICIAL SABUBA PROPOSAL PDF ---');

  // 1. Start internal static server for dist
  const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    if (reqUrl === '/' || reqUrl === '/deck-print') reqUrl = '/index.html';

    // Decode URL to support files with spaces like "5. Konsep Street Food.jpg"
    let decodedPath = decodeURIComponent(reqUrl);
    let filePath = path.join(path.resolve('dist'), decodedPath);
    
    // If doesn't exist in dist, check public
    if (!fs.existsSync(filePath)) {
      filePath = path.join(path.resolve('public'), decodedPath);
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(path.resolve('dist'), 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  });

  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Internal server running on port ${PORT}`);

  // 2. Locate Chrome / Edge
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const browserBin = fs.existsSync(chromePath) ? chromePath : edgePath;
  console.log('Using browser binary:', browserBin);

  // 3. Launch headless browser with CDP
  const browser = spawn(browserBin, [
    '--headless=new',
    `--remote-debugging-port=${DEBUG_PORT}`,
    '--disable-gpu',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--hide-scrollbars',
    '--window-size=1920,1080',
    '--run-all-compositor-stages-before-draw'
  ]);

  // Wait 2 seconds for browser startup
  await new Promise(r => setTimeout(r, 2000));

  try {
    const tabRes = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new?http://localhost:${PORT}/?print=deck`, { method: 'PUT' });
    const tab = await tabRes.json();
    const ws = new WebSocket(tab.webSocketDebuggerUrl);

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let idCounter = 1;
    const pending = new Map();
    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };

    const cdp = (method, params = {}) => new Promise((resolve, reject) => {
      const cur = idCounter++;
      pending.set(cur, { resolve, reject });
      ws.send(JSON.stringify({ id: cur, method, params }));
    });

    await cdp('Page.enable');
    await cdp('Runtime.enable');

    console.log('Navigating to http://localhost:' + PORT + '/?print=deck...');
    await cdp('Page.navigate', { url: `http://localhost:${PORT}/?print=deck` });

    // Wait 7 seconds for React hydration, images, and fonts to render
    console.log('Waiting 7s for slides, fonts, and images to fully render...');
    await new Promise(r => setTimeout(r, 7000));

    // Evaluate slides count
    const evalSlides = await cdp('Runtime.evaluate', {
      expression: `document.querySelectorAll('.slide-print-card').length`
    });
    console.log('Found rendered slide cards:', evalSlides.result?.value);

    // Emulate print media
    await cdp('Emulation.setEmulatedMedia', { media: 'print' });

    console.log('Generating high-resolution 16:9 PDF via Page.printToPDF...');
    const pdfRes = await cdp('Page.printToPDF', {
      landscape: true,
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      generateTaggedPDF: true
    });

    const pdfBuffer = Buffer.from(pdfRes.data, 'base64');
    
    // Save to public/assets/Proposal-Kemitraan-Sabuba-2026.pdf
    const outPublic = path.resolve('public', 'assets', 'Proposal-Kemitraan-Sabuba-2026.pdf');
    fs.writeFileSync(outPublic, pdfBuffer);
    console.log(`SUCCESS! Saved PDF to ${outPublic} (${pdfBuffer.length} bytes)`);

    // Save to dist/assets/Proposal-Kemitraan-Sabuba-2026.pdf
    const outDist = path.resolve('dist', 'assets', 'Proposal-Kemitraan-Sabuba-2026.pdf');
    if (fs.existsSync(path.dirname(outDist))) {
      fs.writeFileSync(outDist, pdfBuffer);
      console.log(`Also copied to ${outDist}`);
    }

    await cdp('Page.close');
    ws.close();
  } catch (err) {
    console.error('Fatal error during PDF generation:', err);
    process.exit(1);
  } finally {
    browser.kill();
    server.close();
    console.log('Done.');
  }
}

main();
