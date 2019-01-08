const app = require("./app");
const http = require("http");
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);

server.listen(port);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.on("listening", () => {
  console.log(`server is listening on port ${server.address().port}`);
});
