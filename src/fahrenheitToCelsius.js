/**
 * Converts from Fahrenheit to Celsius
 * 
 * @param {number} degreesFahrenheit Degrees on the Fahrenheit scale
 * @returns Degrees on the Celsius scale
 */
function fahrenheitToCelsius(degreesFahrenheit = 0) {
  return (degreesFahrenheit - 32) * 5 / 9;
}

module.exports = fahrenheitToCelsius;
