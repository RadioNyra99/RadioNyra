/**
 * serve-out.mjs — zero-dependency static preview server for `out/` (next build).
 *
 * Serves the production static export on a local port so it can be previewed
 * (or shared through a tunnel) exactly as deployed: extensionless routes are
 * resolved to their .html file, directory indexes to index.html, and unknown
 * paths fall back to 404.html when present.
 *
 * Usage: node scripts/serve-out.mjs [port]   (default 4173)
 */
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "out");
const PORT = Number(process.argv[2] || 4173);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt2": "text/plain; charset=utf-8",
};

function resolveFile(urlPath) {
  // Prevent path traversal: normalize inside ROOT only.
  const clean = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  const candidate = path.normalize(path.join(ROOT, clean));
  if (!candidate.startsWith(ROOT)) return null;

  const tries = [candidate, `${candidate}.html`, path.join(candidate, "index.html")];
  for (const file of tries) {
    if (existsSync(file) && statSync(file).isFile()) return file;
  }
  return null;
}

createServer((req, res) => {
  const file = resolveFile(req.url === "/" ? "/index.html" : (req.url || "/"));
  if (!file) {
    const notFound = path.join(ROOT, "404.html");
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    if (existsSync(notFound)) createReadStream(notFound).pipe(res);
    else res.end("<h1>404</h1>");
    return;
  }
  const type = MIME[path.extname(file).toLowerCase()] || "application/octet-stream";
  res.writeHead(200, { "content-type": type, "cache-control": "no-store" });
  createReadStream(file).pipe(res);
}).listen(PORT, "127.0.0.1", () => {
  console.log(`[preview] serving out/ at http://localhost:${PORT}`);
});
