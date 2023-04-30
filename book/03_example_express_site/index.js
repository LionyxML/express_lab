const express = require("express");
const expressHandlebars = require("express-handlebars");
const handlers = require("./lib/handlers");

const app = express();
const port = process.env.PORT || 3000;

// Config view engine to use Handlebars
app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Config static middleware
app.use(express.static(`${__dirname}/public`));

// Routes
app.get("/", handlers.home);
app.get("/about", handlers.about);

app.use(handlers.notFound);
app.use(handlers.serverError);

// App start
if (require.main === module) {
  app.listen(port, () =>
    console.log(`Express started on http://localhost:${port}`)
  );
} else {
  module.exports = app;
}
