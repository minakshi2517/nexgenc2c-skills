const appHandler = require('./app.js');
const http = require('http');

// If run locally with `node server.js`
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const server = http.createServer(appHandler);
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = appHandler;
