const fortunes = [
  "Meglio Tardi Che Mai",
  "Ride Bene Chi Ride Ultimo",
  "L’Abito Non Fa il Monaco",
  "L’amore È Cieco",
  "Cavolo!",
  "Sogni d’Oro",
];

exports.getFortune = () => {
  const idx = Math.floor(Math.random() * fortunes.length);
  return fortunes[idx];
};
