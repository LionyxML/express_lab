const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();
const port = process.env.PORT || 3000;

const fortunes = [
  "Meglio Tardi Che Mai",
  "Ride Bene Chi Ride Ultimo",
  "L’Abito Non Fa il Monaco",
  "L’amore È Cieco",
  "Cavolo!",
  "Sogni d’Oro",
];

// Config view engine to use Handlebars
app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Config static middleware
app.use(express.static(`${__dirname}/public`));

// Routes
app.get("/", (_req, res) => res.render("home"));

app.get("/about", (_req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render("about", { fortune: randomFortune });
});

// Custom 404 page
app.use((_req, res) => {
  res.status(404);
  res.render("404");
});

// Custom 500 page
app.use((err, _req, res, _next) => {
  console.error(err.message);
  res.status(500);
  res.render("500");
});

// App start
app.listen(port, () =>
  console.log(`Express started on http://localhost:${port}`)
);
