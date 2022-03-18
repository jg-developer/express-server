const express = require("express");
const app = express();
const port = 3333;

app.get("/", (req, res) => {
  setTimeout(() => {
    res.send("Hello World!");
  }, 20000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
