const express = require("express");
const expressHandlebars = require("express-handlebars");
const handlers = require("./lib/handlers");
const weatherMiddleware = require("./lib/middleware/weather");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Config to disable header
app.disable("x-powered-by");

// Config view engine to use Handlebars
app.engine(
	"handlebars",
	expressHandlebars.engine({
		defaultLayout: "main",
		helpers: {
			// Allows sections (see view section-test)
			// adding stuff to header and end of page
			section: function (name, options) {
				if (!this._sections) this._sections = {};

				this._sections[name] = options.fn(this);

				return null;
			},
		},
	})
);
app.set("view engine", "handlebars");

// Config static middleware
app.use(express.static(`${__dirname}/public`));

app.use(weatherMiddleware);

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", handlers.home);
app.get("/about", handlers.about);
app.get("/headers", handlers.headers);
app.get("/tks", handlers.tks);
app.get("/foo", handlers.foo);
app.get("/foo2", handlers.foo2);
app.get("/sections", handlers.sections);

app.get("/api/v1/products", handlers.apiV1Products);
app.get("/api/v1/products/:id", handlers.apiV1ProductsById);

app.get("/api/v2/products", handlers.apiV2Products);

app.get("/newsletter-signup", handlers.newsletterSignup);
app.post("/newsletter-signup/process", handlers.newsletterSignupProcess);
app.get("/newsletter-signup/thank-you", handlers.newsletterSignupThankYou);

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
