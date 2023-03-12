const mathOperation = require("./calculator");
describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(mathOperation.add(1, 2)).toBe(3);
  });

  test("Subtract 9 from 10 should return 3", () => {
    expect(mathOperation.diff(10, 9)).toBe(1);
  });

  test("Subtract higher number from small number", () => {
    expect(mathOperation.diff(2, 3)).not.toBe(1);
  });

  test("Test multiplication of two numbers", () => {
    expect(mathOperation.product(2, 3)).toBe(6);
  });

  test("Test multiplcation of two numbers", () => {
    expect(mathOperation.product(4, 2)).toBeGreaterThan(3);
  });

  test("Test multiplication of two numbers", () => {
    expect(mathOperation.product(2, 2)).toBeLessThan(10);
  });
});
