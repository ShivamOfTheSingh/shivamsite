const fs = require("fs");
const https = require("https");
const express = require("express");
const cors = require("cors");

const app = express();

// Load SSL certificate files for api.singhshivam.com
const privateKey = fs.readFileSync('/etc/letsencrypt/live/api.singhshivam.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/api.singhshivam.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/api.singhshivam.com/chain.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const git_router = require("./routes/github");
app.use("/github", git_router);

const linked_router = require("./routes/linkedin");
app.use("/linkedin", linked_router);

const emailer = require("./routes/emailer");
app.use("/emailer", emailer);

const leetcode = require("./routes/leetcode");
app.use("/leet", leetcode);

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);

// Listen on port 443 for HTTPS
httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443");
});

const http = require("http");

const httpApp = express();

httpApp.use((req, res, next) => {
  // Redirect all HTTP requests to HTTPS
  res.redirect(`https://${req.headers.host}${req.url}`);
});

http.createServer(httpApp).listen(80, () => {
  console.log("HTTP Server running on port 80, redirecting to HTTPS");
});
