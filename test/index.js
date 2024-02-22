
// sum.test.js
const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 5 to equal 8', () => {
  expect(sum(3, 5)).toBe(8);
});

test('adds 3 + (-5) to equal -2', () => {
  expect(sum(3, -5)).toBe(-2);
});

test('adds 3.5 + 7.1 to equal 10.6', () => {
  expect(sum(3.5, 7.1)).toBe(10.6);
});

















// const sum = require('../sum');
// const assert = require('assert');

// describe('Sum', () => {
//   it('should handle positive numbers', () => {
//     assert.equal(sum(3, 5), 8);
//   });
//   it('should handle negative numbers', () => {
//     assert.equal(sum(3, -5), -2);
//   });
//   it('should handle decimals', () => {
//     assert.equal(sum(3.5, 7.1), 10.6);
//   });
// });
