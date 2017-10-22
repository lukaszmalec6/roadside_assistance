"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const io = require("socket.io")();
const app = express();

const port = process.env.PORT || "3001";
app.set("port", port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*      CCORS           */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});
const api = require("./api");
app.use("/api", api);

io.on("connection", client => {
  client.on("accident", function() {
    io.emit("fetchAccident");
    client.on;
  });
});

const ioport = 8000;
io.listen(ioport);
console.log("listening on port ", ioport);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
