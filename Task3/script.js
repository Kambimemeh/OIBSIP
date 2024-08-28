function convertTemperature() {
    inputTemperature = document.getElementById("inputTemperature").value;
     var inputUnit = document.getElementById("inputUnit").value;
     var resultElement = document.getElementById("result");
     var celsius, fahrenheit, kelvin;


if (inputUnit === "celsius") {
    celsius = parseFloat(inputTemperature);
    fahrenheit = celsiusToFahrenheit(celsius);
    kelvin = celsiusToKelvin(celcius);
} else if (inputUnit === "fahrenheit") {
    fahrenheit = parseFloat(inputTemperature);
    celsius = fahrenheitToCelcius(fahrenheit);
    kelvin = celsiusToKelvin(celsius);
}
 else if (inputUnit === "kelvin") {
    kelvin = parseFloat (inputTemperature);
    celsius = kelvintoCelsius(kelvin);
    fahrenheit = celsiusToFahrenheit(celsius);
}

 resultElement.innerHTML = 
 "Celsius: " + celsius + "<br>" +
 "Fahrenheit: " + fahrenheit + "<br>" +
 "Kelvin: " + kelvin;
}

function celsiusToFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;

}

function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius){
    return celsius + 273.15;
}

function kelvintoCelsius(kelvin){
    return kelvin - 273.15;
}