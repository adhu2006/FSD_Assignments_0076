/**
 * Lightweight Local HTTP Server for School Management System
 * Uses built-in Node.js modules (Zero external dependencies required)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

// MIME types for static assets
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const filePath = path.join(BASE_DIR, reqPath);
  const ext = path.extname(filePath).toLowerCase();

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <h2 style="font-family: sans-serif; text-align: center; margin-top: 50px;">
          404 - Page Not Found
        </h2>
        <p style="text-align: center;"><a href="/">Return to Dashboard</a></p>
      `);
      return;
    }

    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log('\n' + '='.repeat(50));
  console.log(' 🎓 School Management System');
  console.log(` 🚀 Server running at: ${url}`);
  console.log(' 🛑 Press Ctrl + C to stop the server');
  console.log('='.repeat(50) + '\n');

  // Auto-open browser on Windows
  exec(`start ${url}`, (err) => {
    // Ignore error if automatic open fails
  });
});
