const cloneArray = require('./cloneArray');

test('properly clones array', () => {
  const array = [1, 2, 3];
  // expect(cloneArray(array)).toBe(array);///fails because it is creating the same array in diffrent memory space

  ///this works
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
})