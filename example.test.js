import {
  capitalized,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./example.js";

test("Not captialized", () => {
  const str = "hello";
  const matchStr = "Hello";

  expect(capitalized(str)).toMatch(matchStr);
});

test("Not Reversed", () => {
  const str = "hello";
  const expectStr = "olleh";

  expect(reverse(str)).toMatch(expectStr);
});

test("Add not working", () => {
  const a = 5;
  const b = 7;

  expect(calculator.add(a, b)).toEqual(a + b);
});

test("Subtract not working", () => {
  const a = 5;
  const b = 7;

  expect(calculator.subtract(b, a)).toEqual(b - a);
});

test("divide not working", () => {
  const a = 10;
  const b = 5;

  expect(calculator.divide(a, b)).toEqual(a / b);
});

test("Multiplication not working", () => {
  const a = 10;
  const b = 5;

  expect(calculator.multiply(a, b)).toEqual(a * b);
});

test("All lower case doesn't work", () => {
  const a = "xyz";
  const shift = 3;

  expect(caesarCipher(a, shift)).toMatch("abc");
});

test("Mix of upper case and lower case doesn't work", () => {
  const a = "HeLLo";
  const shift = 3;

  expect(caesarCipher(a, shift)).toMatch("KhOOr");
});

test("Mix of upper case,lower case, and punctuation doesn't work", () => {
  const a = "Hello, World!";
  const shift = 3;

  expect(caesarCipher(a, shift)).toMatch("Khoor, Zruog!");
});

test("Large Shift doesn't work", () => {
  const a = "xyz";
  const shift = 55;

  expect(caesarCipher(a, shift)).toMatch("abc");
});

test("Objects equal", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    avg: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
