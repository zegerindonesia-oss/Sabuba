import fs from 'fs';
import path from 'path';

async function generatePDF() {
  console.log('Connecting to Chrome CDP...');
  
  // Create a new tab navigating to http://localhost:5173/?print=deck
  const targetRes = await fetch('http://127.0.0.1:9222/json/new?http://localhost:5173/?print=deck', { method: 'PUT' });
  const targetData = await targetRes.json();
  const wsUrl = targetData.webSocketDebuggerUrl;
  console.log('Opened tab:', wsUrl);

  const ws = new WebSocket(wsUrl);

  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  let idCounter = 1;
  const pendingRequests = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pendingRequests.has(msg.id)) {
      const { resolve, reject } = pendingRequests.get(msg.id);
      pendingRequests.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  function sendCommand(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pendingRequests.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await sendCommand('Page.enable');
  await sendCommand('Page.navigate', { url: 'http://localhost:5173/?print=deck' });
  
  console.log('Waiting 5 seconds for all slides & images to render...');
  await new Promise((r) => setTimeout(r, 5000));

  console.log('Generating PDF via Page.printToPDF...');
  const pdfResult = await sendCommand('Page.printToPDF', {
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    generateTaggedPDF: true
  });

  const pdfBuffer = Buffer.from(pdfResult.data, 'base64');
  const outputPath = path.resolve('public', 'assets', 'Proposal-Kemitraan-Sabuba-2026.pdf');
  fs.writeFileSync(outputPath, pdfBuffer);
  console.log(`Successfully generated PDF (${pdfBuffer.length} bytes) at ${outputPath}`);

  // Also copy to dist if dist exists
  const distPath = path.resolve('dist', 'assets', 'Proposal-Kemitraan-Sabuba-2026.pdf');
  if (fs.existsSync(path.dirname(distPath))) {
    fs.writeFileSync(distPath, pdfBuffer);
    console.log(`Also updated ${distPath}`);
  }

  // Close tab
  await sendCommand('Page.close');
  ws.close();
  process.exit(0);
}

generatePDF().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
