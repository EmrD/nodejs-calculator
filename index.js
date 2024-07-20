const express = require("express");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to calculator RestAPI.    Usage: /plus/num1/num2 or /minus/num1/num2");
});

server.get("/plus/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseInt(num1) + parseInt(num2);
  
  if (!isNaN(result)) {
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(400).send("Please enter valid numbers");
  }
});

server.get("/minus/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseInt(num1) - parseInt(num2);
  
  if (!isNaN(result)) {
    res.status(200).send(`Result: ${result}`);
  } else {
    res.status(400).send("Please enter valid numbers");
  }
});

server.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});
