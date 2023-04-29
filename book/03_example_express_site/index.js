const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();
const port = process.env.PORT || 3000;

// Config view engine to use Handlebars
app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Config static middleware
app.use(express.static(`${__dirname}/public`));

// Routes
app.get("/", (_req, res) => res.render("home"));

app.get("/about", (_req, res) => res.render("about"));

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
