import { goLeft, goRight } from './numberCycle.js';

it('successfully goes left', () => {
  let currentValue = 4;
  currentValue = goLeft(currentValue, 5);
  expect(currentValue).toEqual(3);
});

it('successfully goes left to the rightmost value when passing zero', () => {
  let currentValue = 0;
  currentValue = goLeft(currentValue, 5);
  expect(currentValue).toEqual(5);
});

it('successfully goes right', () => {
  let currentValue = 1;
  currentValue = goRight(currentValue, 5);
  expect(currentValue).toEqual(2);
});

it('successfully goes right to zero when passing the max value', () => {
  let currentValue = 5;
  currentValue = goRight(currentValue, 5);
  expect(currentValue).toEqual(0);
});