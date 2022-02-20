const express = require("express");
const app = express();
const port = 5001;
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "build")));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
