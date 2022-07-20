const express = require("express");
const server = express();
server.all("/", (req, res)=> {
  res.send("Capital Bot is Running");
});
function Server() {
  server.listen(3000, () => {
    console.log("Server is ready");
  });
}
module.exports = Server;
