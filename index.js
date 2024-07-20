const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors({ origin: true }));

server.get("/", (req, res) => {
  res.send("Welcome to calculator RestAPI. Usage: /plus/:num1/:num2 or /minus/:num1/:num2");
});

server.get("/plus/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseInt(num1) + parseInt(num2);

  if (!isNaN(result)) {
    res.status(200).json({ result });
  } else {
    res.status(400).send("Please enter valid numbers");
  }
});

server.get("/minus/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = parseInt(num1) - parseInt(num2);

  if (!isNaN(result)) {
    res.status(200).json({ result });
  } else {
    res.status(400).send("Please enter valid numbers");
  }
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
