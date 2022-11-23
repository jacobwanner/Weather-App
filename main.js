// const locationInput = document.getElementById("locationInput");
// const searchButton = document.getElementById('searchButton');
const locationSearch = prompt('what place would you like to see the weather for? (search by "zipcode" or "city,country")');
const display = document.querySelector('display');
const placeDiv = document.getElementById("place")
const feelsLikeTempDiv = document.getElementById("feelsLike");
const trueTempDiv = document.getElementById("trueTemp");
const humidityDiv = document.getElementById("humidity");
const cloudIndexDiv = document.getElementById("cloudIndex");
const windSpeedsDiv = document.getElementById("windSpeeds");

// searchButton.addEventListener("click", () => {
//   locationSearch = locationInput.value;
//   return getWeather;
// });

async function getWeather(){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationSearch}&units=imperial&APPID=501ab2b8a6282d7d36f77e3aa0416c67`, {mode: 'cors'})
  const weatherData = await response.json();
  console.log(weatherData);
  placeDiv.innerText = `The closest station for your search is at: ${weatherData.name}, ${weatherData.sys.country}`;
  feelsLikeTempDiv.innerText = `feels like: ${weatherData.main.feels_like}°F`;
  trueTempDiv.innerText = `true temp: ${weatherData.main.temp}°F`;
  humidityDiv.innerText = `humidity: ${weatherData.main.humidity}%`;
  cloudIndexDiv.innerText = `weather: ${weatherData.weather[0].description}`;
  windSpeedsDiv.innerText = `wind speeds: ${weatherData.wind.speed} mph`
}

getWeather();