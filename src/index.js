var express = require("express");
var dogs = require("./dogs.json")
var app = express();

var port = 3000;

app.get("/api/dogs", function(request, response) {
  response.json(dogs);
});

app.listen(port, function() {
  console.log("server running");
});
