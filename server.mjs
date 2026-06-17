// Minimal static file server for local preview of the ATSA website.
import http from 'http';
import { readFile } from 'fs';
import { extname, join, normalize } from 'path';

const BASE = '/Users/connorbailey/Claude/Projects/ATSA-Website';
// Optional args: node server.mjs [subdir] [port]  — defaults to the dev root on 8140.
const ROOT = process.argv[2] ? join(BASE, process.argv[2]) : BASE;
const PORT = Number(process.argv[3]) || 8140;
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.json': 'application/json',
  '.png': 'image/png',
};

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const fp = normalize(join(ROOT, p));
  if (!fp.startsWith(ROOT)) { res.writeHead(403); return res.end('forbidden'); }
  readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); return res.end('404 ' + p); }
    res.writeHead(200, { 'Content-Type': TYPES[extname(fp)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log('ATSA website on http://localhost:' + PORT));
