const https = require('https');

const checkWebsite = (website, done) => {
  https.get(website, (res) => {
    const { statusCode } = res;

    done(statusCode);
  });
}

exports.check = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    const website = req.body.website;

    checkWebsite(website, (code) => {
      res.setHeader('Content-Type', 'application/json')
      res.status(200).send(JSON.stringify({ code }));
    });
  }
}