const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const http = require("http");

const app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var models = require("./models");

const port = parseInt(process.env.PORT, 10) || 3000;

app.set("port", port);

console.log("server started on ", port);

models.sequelize.sync().then(function () {
        app.listen(port);
});

require("./routes")(app);

app.get("*", (_req, res) =>
        res.status(200).send({ message: "Nothing to see here..." })
);

module.exports = app;

