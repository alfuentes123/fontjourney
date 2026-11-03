import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT ?? 8080);
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.ttf': 'font/ttf', '.md': 'text/plain', '.txt': 'text/plain', '.svg': 'image/svg+xml' };
const publicFiles = new Set(['/index.html', '/styles.css', '/app.js', '/model.js', '/color.js', '/f.svg']);
const server = http.createServer(async (request, response) => {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Cache-Control', 'no-cache');
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end('Method not allowed');
    return;
  }
  try {
    let pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname === '/') pathname = '/index.html';
    if ((!publicFiles.has(pathname) && !pathname.startsWith('/assets/fonts/')) || pathname.includes('\\') || pathname.split('/').includes('..')) {
      response.writeHead(404).end('Not found'); return;
    }
    const file = path.resolve(root, '.' + pathname);
    if (!file.startsWith(root + path.sep)) { response.writeHead(404).end('Not found'); return; }
    const data = await readFile(file);
    response.writeHead(200, { 'Content-Type': (types[path.extname(file)] ?? 'application/octet-stream') + (['.js', '.html', '.css', '.md', '.txt'].includes(path.extname(file)) ? '; charset=utf-8' : '') });
    response.end(request.method === 'HEAD' ? undefined : data);
  } catch (error) {
    response.writeHead(error instanceof URIError ? 400 : 404).end('Not found');
  }
});
server.on('error', error => { console.error(`Could not start Font Journey: ${error.message}`); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Font Journey is ready at http://localhost:${port}`));
