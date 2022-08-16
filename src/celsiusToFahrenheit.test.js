const celsiusToFahrenheit = require('./celsiusToFahrenheit');

test('converts from fahrenheit to celsius', () => {
  expect(celsiusToFahrenheit(25)).toBe(77);
});
