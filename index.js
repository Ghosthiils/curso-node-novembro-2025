const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/pt", function (req, res) {
  res.send("ola mundo");
});

app.get("/es", function (req, res) {
  res.send("Hola");
});

app.get("/en", function (req, res) {
  res.send("hello");
});

app.listen(3000);
