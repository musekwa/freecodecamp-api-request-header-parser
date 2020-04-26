// server.js
// where your node app starts

// init project
var express = require('express');
var accepts = require('accepts');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/whoami", function (req, res) {
  const software = req.get('user-agent');
  const start = software.indexOf('(');
  const end = software.indexOf(')');

  const ipaddress = req.ip

  res.send({
    ipaddress,
    language: req.acceptsLanguages()[0],
    software: software.slice(start + 1, end),
  });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
