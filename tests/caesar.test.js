import { caesar } from "../code/caesar";

test("Converts Hello to mjqqt", () => {
  expect(caesar("hello", 5)).toBe("mjqqt");
});

test("Converts HELLO to EBIIL", () => {
  expect(caesar("HELLO", -3)).toBe("EBIIL");
});

test("Converts Hello to Byffi", () => {
  expect(caesar("Hello", 20)).toBe("Byffi");
});

test("Converts Hello World to Byffi Qilfx", () => {
  expect(caesar("Hello World", 20)).toBe("Byffi Qilfx");
});

test("Does not convert punctuations", () => {
  expect(caesar("Goodbye! Have a nice day!", 25)).toBe(
    "Fnncaxd! Gzud z mhbd czx!",
  );
});

test("Works for high positive shifts", () => {
  expect(caesar("Testing for high positive shifts", 100)).toBe(
    "Paopejc bkn decd lkoepera odebpo",
  );
});

test("Works for high negative numbers", () => {
  expect(caesar("Testing for high negative shifts", -80)).toBe(
    "Rcqrgle dmp fgef lceyrgtc qfgdrq",
  );
});
