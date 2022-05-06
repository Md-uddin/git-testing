const subtract = require('./subtract');
test('proprely subtracts two numbers', () => {
  //////we expect this(func) to be (run this way);; 
  expect(
    subtract(1, 3)
  ).toBe(-2)
});