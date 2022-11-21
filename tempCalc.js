let fahr = 0;
let kelvin = 0;
let celsius = 0;

let kelvinToFahr = (kelvin) => {
    kelvin = kelvin - 273.15;
    kelvin = kelvin * 9;
    kelvin = kelvin / 5;
    return fahr = kelvin + 32;
}

let fahrToKelvin = (fahr) => {
    fahr = fahr - 32;
    fahr = fahr * 5;
    fahr = fahr / 9;
    return kelvin = fahr + 273.15;
}

let kelvinToCelsius = (kelvin) => {
    return celsius = kelvin - 273.15;
}

let celsiusToKelvin = (celsius) => {
    return kelvin = celsius + 273.15;
}

let celsiusToFahr = (celsius) => {
    celsius = celsius * 1.8;
    return fahr = celsius + 32;
}

let fahrToCelsius = (fahr) => {
    const fiveDividedByNine = 5/9;
    fahr = fahr - 32;
    return celsius = fahr * fiveDividedByNine;
}

export {fahr, kelvin, celsius, kelvinToFahr, kelvinToCelsius, fahrToKelvin, fahrToCelsius, celsiusToFahr, celsiusToKelvin}