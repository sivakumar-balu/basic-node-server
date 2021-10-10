// A BASIC Node server

// load up the express framework and body-parser helper
const express = require('express');

// create an instance of express to serve our end points
const app = express();

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require('fs');

const http = require("http");

const server = http.createServer(function(req, res) {
  res.setHeader("Content-type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200); //status code HTTP 200 / OK

  let dataObj = { "todotext": "Take Kids to Karate class",  "datetime": "2021-10-23T12:50",  "location": "Main St, Boston",  "id": 1 };
  let data = JSON.stringify(dataObj);
  res.end(data);
});

server.listen(4000, function() {
  console.log("Listening on port 4000");
});