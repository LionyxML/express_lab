const fortune = require("./fortune");

exports.home = (_req, res) => res.render("home");

exports.about = (_req, res) =>
  res.render("about", { fortune: fortune.getFortune() });

exports.notFound = (_req, res) => res.render("404");

/* eslint-disable no-unused-vars */
exports.serverError = (err, _req, res, _next) => res.render("500");
/* eslint-enable no-unused-vars */

exports.headers = (req, res) => {
  res.type("text/plain");
  const headers = [
    "===== Request Headers Echo",
    ...Object.entries(req.headers).map(([key, value]) => `${key}: ${value}`),
  ];
  res.send(headers.join("\n"));
};

exports.tks = (req, res) => res.render("tks");

const products = [
  { id: 0, name: "Cafè", price: 2.0 },
  {
    id: 1,
    name: "Biscotto",
    price: 2.0,
  },
];

exports.apiV1Products = (req, res) => res.json(products);

exports.apiV1ProductsById = (req, res) => {
  const idx = products.findIndex(
    (product) => product.id === parseInt(req.params.id)
  );

  if (idx < 0) return res.status(404).json({ error: "Product not found." });

  res.json(products[idx]);
};

exports.apiV2Products = (req, res) => {
  const productsXml = `<?xml version="1.0"?><products>${products
    .map((p) => `<product price="${p.price}" id="${p.id}">${p.name}</product>`)
    .join("")}</products>`;

  const productsText = products
    .map((p) => `${p.id}: ${p.name} (${p.price})`)
    .join("\n");

  res.format({
    "application/json": () => res.json(products),
    "application/xml": () => res.type("application/xml").send(productsXml),
    "text/xml": () => res.type("text/xml").send(productsXml),
    "text/plain": () => res.type("text/plain").send(productsText),
  });
};
