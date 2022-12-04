const locationInput = document.getElementById("locationInput");
locationInput.value = "Fredericksburg, Virginia"
const searchButton = document.getElementById('searchButton');
searchButton.onclick = getWeather;
const dateAndTime = document.getElementById("dateAndTime");
const placeDiv = document.getElementById("place")
const feelsLikeTempDiv = document.getElementById("feelsLike");
const trueTempDiv = document.getElementById("trueTemp");
const humidityDiv = document.getElementById("humidity");
const cloudIndexDiv = document.getElementById("cloudIndex");
const windSpeedsDiv = document.getElementById("windSpeeds");

async function getWeather(){
  let locationSearch = locationInput.value;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationSearch}&units=imperial&APPID=501ab2b8a6282d7d36f77e3aa0416c67`, {mode: 'cors'})
  const weatherData = await response.json();
  console.log(weatherData);
  placeDiv.innerText = `${locationSearch}`;
  feelsLikeTempDiv.innerText = `feels like: ${weatherData.main.feels_like}°F`;
  trueTempDiv.innerText = `true temp: ${weatherData.main.temp}°F`;
  humidityDiv.innerText = `humidity: ${weatherData.main.humidity}%`;
  cloudIndexDiv.innerText = `weather: ${weatherData.weather[0].description}`;
  windSpeedsDiv.innerText = `wind speeds: ${weatherData.wind.speed} mph`
  locationInput.value = "";
}

let date = new Date();
let currentDate = date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear();
let currentTime = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
dateAndTime.innerText = `${currentDate} ${currentTime}`;


getWeather();