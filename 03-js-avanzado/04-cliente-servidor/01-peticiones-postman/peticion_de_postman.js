var https = require("follow-redirects").https;
var fs = require("fs");

var options = {
  method: "GET",
  hostname: "pokeapi.co",
  path: "/api/v2/pokemon?id=125",
  headers: {},
  maxRedirects: 20,
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
