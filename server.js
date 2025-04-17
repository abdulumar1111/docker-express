const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.send("Welcome to express js in Docker");
});

app.listen(PORT, () => console.log (`Server is Successfully Running, and App is listening on port PORT ${PORT}`));
