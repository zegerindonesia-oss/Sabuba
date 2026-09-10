async function run() {
  const targetRes = await fetch('http://127.0.0.1:9222/json/new?http://localhost:5173/?print=deck', { method: 'PUT' });
  const target = await targetRes.json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);

  await new Promise(r => ws.onopen = r);

  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.method === 'Runtime.consoleAPICalled' || msg.method === 'Runtime.exceptionThrown') {
      console.log('BROWSER LOG/ERR:', JSON.stringify(msg.params));
    }
  };

  ws.send(JSON.stringify({ id: 1, method: 'Console.enable' }));
  ws.send(JSON.stringify({ id: 2, method: 'Runtime.enable' }));

  await new Promise(r => setTimeout(r, 3000));

  let reqId = 10;
  function evalCode(expr) {
    return new Promise((resolve) => {
      const cur = reqId++;
      const handler = (e) => {
        const res = JSON.parse(e.data);
        if (res.id === cur) {
          ws.removeEventListener('message', handler);
          resolve(res.result?.result?.value);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: cur, method: 'Runtime.evaluate', params: { expression: expr } }));
    });
  }

  const rootHtml = await evalCode('document.getElementById("root")?.innerHTML');
  console.log('Root HTML length:', rootHtml?.length);
  console.log('Preview:', rootHtml?.slice(0, 300));
  
  const title = await evalCode('document.title');
  console.log('Title:', title);

  const url = await evalCode('window.location.href');
  console.log('URL:', url);

  process.exit(0);
}

run().catch(console.error);
