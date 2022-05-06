const sum = require('./sum')

test('proprely adds two numbers', () => {
  //////we expect this(func) to be (run this way);; 
  expect(
    sum(1, 3)
  ).toBe(4)
});