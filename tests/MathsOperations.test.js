import * as Maths from '../utils/Maths';

const value = Maths.minus(10000, 5000);
test('10000 - 5000 = 5000', () => {
  expect(value).toBe(5000);
});

test('expect return value to be positive', () => {
  expect(value).toBeGreaterThan(0);
});
