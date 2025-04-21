const request = require("request");

const weatherData = (address, callback) => {
  const url = `${process.env.BASE_URL}${encodeURIComponent(address)}&appid=${process.env.API_KEY}`;
  console.log(url);
  console.log(process.env.BASE_URL);
  console.log(process.env.API_KEY);
  request({ url, json: true }, (error, data) => {
    if (error) {
      callback(true, "unable to connect to the weather service", error);
    }
    callback(false, data.body);
  });
};

module.exports = weatherData;
