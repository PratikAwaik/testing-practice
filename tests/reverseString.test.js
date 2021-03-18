import { reverseString } from "../code/reverseString";

test("Reverses one word", () => {
  expect(reverseString("reverse")).toBe("esrever");
});

test("Reverses multiple words", () => {
  expect(reverseString("Please reverse this")).toBe("siht esrever esaelP");
});
