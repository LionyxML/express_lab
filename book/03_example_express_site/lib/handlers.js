const fortune = require("./fortune");

exports.home = (_req, res) => res.render("home");

exports.about = (_req, res) =>
  res.render("about", { fortune: fortune.getFortune() });

exports.notFound = (_req, res) => res.render("404");

exports.serverError = (err, _req, res, _next) => res.render("500");
