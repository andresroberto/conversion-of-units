/**
 * Converts from Celsius to Fahrenheit
 * 
 * @param {number} degreesCelsius Degrees on the Celsius scale
 * @returns Degrees on the Fahrenheit scale
 */
 function celsiusToFahrenheit(degreesCelsius = 0) {
  return (degreesCelsius / 5 * 9) + 32;
}

module.exports = celsiusToFahrenheit;
