const express = require("express");
const server = express();

server.use(express.static(__dirname + "/public"));

server.use((req, res, next) => {
  //config
  next();
});

server.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("The server is running on Port 3000");
});
