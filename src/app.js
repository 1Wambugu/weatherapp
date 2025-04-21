const express = require("express");
const hbs = require("hbs");
const path = require("path");
require("dotenv").config();

const app = express();
const weatherData = require("../utils/weatherdata");

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.use(express.static(publicPath));
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// process env port
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("Address is required");
  }
  weatherData(req.query.address, (error, result) => {
    if (error) {
      return res.send("Error");
    }
    res.send(result);
  });
});

// 404 handler
app.use((req, res) => {
  res.render("404", {
    title: "Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
