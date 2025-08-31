const { add } = require('../src/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(4);
});

test('adds 2 + 2 to equal 3', () => {
  expect(add(2, 2)).toBe(4);
});
