const fahrenheitToCelsius = require('./fahrenheitToCelsius');

test('converts from fahrenheit to celsius', () => {
  expect(fahrenheitToCelsius(77)).toBe(25);
});
