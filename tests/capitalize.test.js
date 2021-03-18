import { capitalize } from "../code/capitalize";

test("Outputs 'First'", () => {
  expect(capitalize("first")).toBe("First");
});

test("Outputs 'Works'", () => {
  expect(capitalize("works")).toBe("Works");
});

test("Sentence Test 1", () => {
  expect(capitalize("this is working")).toBe("This is working");
});

test("Sentence Test 2", () => {
  expect(capitalize("tHiS iS WoRkIng")).toBe("THiS iS WoRkIng");
});
