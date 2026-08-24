// NexGen C2C Skills - Vercel Serverless Entrypoint
module.exports = (req, res) => {
  res.writeHead(302, { Location: '/index.html' });
  res.end();
};
