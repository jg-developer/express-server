const express = require("express");
const app = express();
const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/timeout", (req, res) => {
  const { timeout } = req.query;
  setTimeout(() => {
    res.send("Timeout response");
  }, timeout);
});

app.get("/server_error", (req, res) => {
  res.status(500).send();
});

app.get("/not_found", (req, res) => {
  res.status(404).send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
