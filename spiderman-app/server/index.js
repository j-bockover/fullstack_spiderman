const express = require("express");
const app = express();
const port = 5001;
const path = require("path");
const axios = require("axios");

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/api", (req, res) => {
  axios
    .get("https://thronesapi.com/api/v2/Characters")
    .then((response) => {
      res.send({ data: response.data });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
