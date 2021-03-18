import { analyze } from "../code/analyze";

test("Analyze Test 1", () => {
  expect(analyze([3, 4, 2, 7])).toEqual({
    average: 4,
    min: 2,
    max: 7,
    length: 4,
  });
});

test("Analyze Test 2", () => {
  expect(analyze([-10, 30, 88, 20, -100, 50, 40])).toEqual({
    average: 118 / 7,
    min: -100,
    max: 88,
    length: 7,
  });
});

test("Analyze Test 3", () => {
  expect(analyze([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });
});
