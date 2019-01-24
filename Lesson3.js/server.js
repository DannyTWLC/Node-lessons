const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.statusCode(200).sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("The server is running on Port 3000");
});
