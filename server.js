const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = 'db4d3ed9c755b30367db34538cd6e946';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      
      console.log(weather);
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        let weatherDescription = `It's ${weather.weather[0].description} in ${weather.name}`;
        let weatherIcon = `${weather.weather[0].icon}`;
        let windSpeed = `The wind speed is ${weather.wind.speed}`;
        let humidity = `The humidity is ${weather.main.humidity}`;
        let atmosphericPressure = `The atmospheric pressure is ${weather.main.pressure}`;
        let windDirection = `The wind direction is ${weather.wind.deg}`;
        let arrow = `${weather.wind.deg}`;
        res.render('index', {weather: weatherText, ws: windSpeed, wd: weatherDescription, wi: weatherIcon, h: humidity, ap: atmosphericPressure, dir: windDirection, ar: arrow, icon: findDirection(arrow),  error: null});
      }
        
    }
  });
})

function findDirection(arrow){
    var path;
    if (arrow >= 348.75 || arrow <= 11.25){
        path = '/img/arrow.png';
    }
    else if (arrow >= 11.25 && arrow <= 33.75){
        path = '/img/arrow.png';
    }
    else if (arrow >= 33.75 && arrow <= 56.25){
        path = '/img/arrow.png';
    }
    else if (arrow >= 56.25 && arrow <= 78.75){
        path = '/img/arrow.png';
    }
    else if (arrow >= 78.75 && arrow <= 101.25){
        path = '/img/arrow.png';
    }
    else if (arrow >= 101.25 && arrow <= 123.75){
        path = '/img/arrow.png';
    }
    else if (arrow >= 123.75 && arrow <= 146.25){
        path = '/img/arrow.png';
    }
    else if (arrow >= 146.25 && arrow <= 168.75){
        path = '/img/arrow.png';
    }
    else if (arrow >= 168.75 && arrow <= 191.25){
        path = '/img/arrow.png';
    }
    else if (arrow >= 191.25 && arrow <= 213.75){
        path = '/img/arrow.png';
    }
    else if (arrow >= 213.75 && arrow <= 236.75){
        path = '/img/arrow.png';
    }
    else if (arrow >= 236.25 && arrow <= 258.75){
        path = '/img/arrow.png';
    }
    else if (arrow >= 258.75 && arrow <= 281.25){
        path = '/img/arrow.png';
    }
    else if (arrow >= 281.25 && arrow <= 303.75){
        path = '/img/arrow.png';
    }
    else if (arrow >= 303.75 && arrow <= 326.25){
        path = '/img/arrow.png';
    }
    else if (arrow >= 326.25 && arrow <= 348.75){
        path = '/img/arrow.png';
    }
}

/*function weatherIcon(iconCode){
    let iconImage;
    if(iconCode == '01d'){
        iconImage = '/img/01d.png';
    }
    else if(iconCode == '01n'){
        iconImage = '/img/01n.png';
    }
    else if(iconCode == '02d'){
        iconImage = '/img/02d.png';
    }
    else if(iconCode == '02n'){
        iconImage = '/img/02n.png';
    }
    else if(iconCode == '03d'){
        iconImage = '/img/01n.png';
    }
    else if(iconCode == '03n'){
        iconImage = '/img/03n.png';
    }
    else if(iconCode == '04d'){
        iconImage = '/img/04n.png';
    }
    else if(iconCode == '04n'){
        iconImage = '/img/04n.png';
    }
    else if(iconCode == '09d'){
        iconImage = '/img/09d.png';
    }
    else if(iconCode == '09n'){
        iconImage = '/img/09n.png';
    }
    else if(iconCode == '10d'){
        iconImage = '/img/10d.png';
    }
    else if(iconCode == '10n'){
        iconImage = '/img/10n.png';
    }
    else if(iconCode == '11d'){
        iconImage = '/img/11n.png';
    }
    else if(iconCode == '11n'){
        iconImage = '/img/11n.png';
    }
    else if(iconCode == '13d'){
        iconImage = '/img/13d.png';
    }
    else if(iconCode == '50n'){
        iconImage = '/img/50n.png';
    }
    
    return iconImage;
    
} */


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})