const getWeatherData = () =>
  Promise.resolve([
    {
      location: {
        name: "Rome",
        coordinates: { lat: 45.515486, lng: -122.6793461 },
      },
      forecastUrl: "https://api.weather.gov/gridpoints/TOP/31,80/forecast",
      iconUrl: "https://api.weather.gov/icons/land/day/tsra,40?size=medium",
      weather: "Change Showers and Thunderstorms",
      temp: "30 C",
    },
    {
      location: {
        name: "Treviso",
        coordinates: { lat: 45.515486, lng: -122.6793461 },
      },
      forecastUrl: "https://api.weather.gov/gridpoints/TOP/31,80/forecast",
      iconUrl: "https://api.weather.gov/icons/land/day/tsra_sct,50?size=medium",
      weather: "Change Showers and Thunderstorms",
      temp: "35 C",
    },
    {
      location: {
        name: "Villa Estense",
        coordinates: { lat: 45.515486, lng: -122.6793461 },
      },
      forecastUrl: "https://api.weather.gov/gridpoints/TOP/31,80/forecast",
      iconUrl: "https://api.weather.gov/icons/land/day/tsra,90?size=medium",
      weather: "Change Showers and Thunderstorms",
      temp: "33 C",
    },
  ]);

const weatherMiddleware = async (_req, res, next) => {
  if (!res.locals.partials) res.locals.partials = {};

  res.locals.partials.weatherContext = await getWeatherData();

  next();
};

module.exports = weatherMiddleware;
