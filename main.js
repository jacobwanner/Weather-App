const locationInput = document.getElementById("locationInput");
const submitButton = document.getElementById('submitButton');
const locationText = "22406";
submitButton.addEventListener("click", () => {
    return locationText = locationInput.value;
});

const display = document.querySelector('display');
fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${locationText} &APPID=501ab2b8a6282d7d36f77e3aa0416c67`, {mode: 'cors'})
  .then(function(response) {
    console.log(response.json());
  });