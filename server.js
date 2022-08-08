const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const product = require("./products1.json");
const fs = require("fs"); //
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
// app.get("/api/hello", (req, res) => {
//   res.send({ express: "Hello From Express" });
// });

// app.get("/products", (req, res) => {
//   res.json({ product });
// });
app.get("/api/hello", (req, res) => {
  fs.readFile("./products1.json", "utf8", (err, data) => {
    if (err) console.log("error");
    if (data) {
      const products = JSON.parse(data);
      res.send(products);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
