const path = require('path');
const fs = require('fs');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const apiRoutes = {
  '/api/auth/login': require('./api/auth/login'),
  '/api/auth/verify-otp': require('./api/auth/verify-otp'),
  '/api/auth/resend-otp': require('./api/auth/resend-otp'),
  '/api/auth/me': require('./api/auth/me')
};

function attachResHelpers(res) {
  if (typeof res.status !== 'function') {
    res.status = function (code) {
      res.statusCode = code;
      return res;
    };
  }
  if (typeof res.json !== 'function') {
    res.json = function (data) {
      if (!res.headersSent) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
      }
      res.end(JSON.stringify(data));
      return res;
    };
  }
}

function readJsonBody(req) {
  return new Promise((resolve) => {
    if (req.body != null) {
      if (Buffer.isBuffer(req.body)) {
        try {
          return resolve(JSON.parse(req.body.toString('utf8') || '{}'));
        } catch (e) {
          return resolve({});
        }
      }
      if (typeof req.body === 'string') {
        try {
          return resolve(JSON.parse(req.body || '{}'));
        } catch (e) {
          return resolve({});
        }
      }
      if (typeof req.body === 'object') {
        return resolve(req.body);
      }
    }

    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8');
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });
}

function serveStatic(reqUrl, res) {
  if (reqUrl === '/' || reqUrl === '') reqUrl = '/index.html';

  if (!path.extname(reqUrl)) {
    if (fs.existsSync(path.join(__dirname, reqUrl + '.html'))) {
      reqUrl += '.html';
    }
  }

  const filePath = path.join(__dirname, reqUrl);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=0, must-revalidate'
    });
    res.end(content);
  });
}

module.exports = async (req, res) => {
  attachResHelpers(res);
  const reqUrl = (req.url || '/').split('?')[0];

  if (apiRoutes[reqUrl]) {
    try {
      req.body = await readJsonBody(req);
      await apiRoutes[reqUrl](req, res);
    } catch (err) {
      console.error('API Error:', err);
      if (!res.headersSent) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
    }
    return;
  }

  serveStatic(reqUrl, res);
};
