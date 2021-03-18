import { calculator } from "../code/calculator";

test("Addition works", () => {
  expect(calculator.add(3, 2)).toBe(5);
});

test("Subtraction works", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test("Multiply works", () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});

test("Division works", () => {
  expect(calculator.divide(10, 4)).toBeCloseTo(2.5);
});
