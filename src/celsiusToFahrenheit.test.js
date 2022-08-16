const celsiusToFahrenheit = require('./celsiusToFahrenheit');

test('converts from celsius to fahrenheit', () => {
  expect(celsiusToFahrenheit(25)).toBe(77);
});
