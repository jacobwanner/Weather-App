const locationInput = document.getElementById("locationInput");
locationInput.value = "Fredericksburg, Virginia"
const searchButton = document.getElementById('searchButton');
searchButton.onclick = getWeather;

const display = document.querySelector('display');
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
  placeDiv.innerText = `In ${locationSearch} the weather is:`;
  feelsLikeTempDiv.innerText = `feels like: ${weatherData.main.feels_like}°F`;
  trueTempDiv.innerText = `true temp: ${weatherData.main.temp}°F`;
  humidityDiv.innerText = `humidity: ${weatherData.main.humidity}%`;
  cloudIndexDiv.innerText = `weather: ${weatherData.weather[0].description}`;
  windSpeedsDiv.innerText = `wind speeds: ${weatherData.wind.speed} mph`
  locationInput.value = "";
}

// Alabama 	AL
// Alaska 	AK
// Arizona 	AZ	
// Arkansas 	AR
// California 	CA
// Colorado 	CO
// Connecticut 	CT
// Delaware 	DE
// Florida 	FL
// Georgia 	GA
// Hawaii 	HI
// Idaho 	ID
// Illinois 	IL
// Indiana 	IN
// Iowa 	IA
// Kansas 	KS
// Kentucky 	KY
// Louisiana 	LA
// Maine 	ME
// Maryland 	MD
// Massachusetts 	MA
// Michigan 	MI
// Minnesota 	MN
// Mississippi 	MS
// Missouri 	MO
// Montana 	MT
// Nebraska 	NE
// Nevada 	NV
// New Hampshire 	NH
// New Jersey 	NJ
// New Mexico 	NM
// New York 	NY
// North Carolina 	NC
// North Dakota 	ND
// Ohio 	OH
// Oklahoma 	OK
// Oregon 	OR
// Pennsylvania 	PA
// Rhode Island 	RI
// South Carolina 	SC
// South Dakota 	SD
// Tennessee 	TN
// Texas 	TX
// Utah 	UT
// Vermont 	VT
// Virginia 	VA
// Washington 	WA
// West Virginia 	WV
// Wisconsin 	WI
// Wyoming 	WY