const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Estense Village");
});

app.get("/about", (req, res) => {
  res.type("text/plain");
  res.send("About Estense Village");
});

// página 404 personalizada
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

// página 500 personalizada
app.use((err, req, res, next) => {
  console.error(err.message);
  res.stype("text/plain");
  res.status(500);
  res.send("500 - Server Error");
});

app.listen(port, () =>
  console.log(`Express started on http://localhost:${port}`)
);
