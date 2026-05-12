const http = require('http');

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <body>
        <h1>Docker funcionando 🚀</h1>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


