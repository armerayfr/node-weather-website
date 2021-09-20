const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=a98d22181809fef96530211f1d36688c&query=${latitude},${longtitude}&units=f`;

  request(
    {
      url,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("unable to connect the location", undefined);
      } else if (body.error) {
        callback(
          "unable to find the location. Please try another location",
          undefined
        );
      } else {
        callback(
          undefined,
          `${body.current.weather_descriptions[0]}. it's currently ${body.current.temperature} degrees out. it feels like ${body.current.feelslike} degrees out`
        );
      }
    }
  );
};

module.exports = forecast;
