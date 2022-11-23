const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById('searchButton');
const locationText = "22406";
const display = document.querySelector('display');
const placeDiv = document.getElementById("place")
const feelsLikeTempDiv = document.getElementById("feelsLike");
const humidityDiv = document.getElementById("humidity");
const trueTempDiv = document.getElementById("trueTemp");
const tempMaxDiv = document.getElementById("tempMax");
const tempMinDiv = document.getElementById("tempMin");

searchButton.addEventListener("click", () => {
  locationText = locationInput.value;
});

async function getWeather(){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=22406&units=imperial&APPID=501ab2b8a6282d7d36f77e3aa0416c67`, {mode: 'cors'})
  const weatherData = await response.json();
  console.log(weatherData);
  placeDiv.innerText = `The weather for ${weatherData.name}, ${weatherData.sys.country} is:`;
  feelsLikeTempDiv.innerText = `feels like: ${weatherData.main.feels_like}°`;
  humidityDiv.innerText = `humidity: ${weatherData.main.humidity}%`;
  trueTempDiv.innerText = `true temp: ${weatherData.main.temp}°`;
  tempMaxDiv.innerText = `Highest: ${weatherData.main.temp_max}°`
  tempMinDiv.innerText = `Lowest: ${weatherData.main.temp_min}°`

  // displayResponse;
}

getWeather()
