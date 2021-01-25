import { add, divide, multiply, subtract } from "./calculationOperators";

describe("calculationOperators", () => {
  const num1 = 6;
  const num2 = 3;
  describe("multiply", () => {
    it("should return the correct value when passed 2 numbers", () => {
      expect(multiply(num1, num2)).toEqual(18);
    });
  });
  describe("divide", () => {
    it("should return the correct value when passed 2 numbers", () => {
      expect(divide(num1, num2)).toEqual(2);
    });
  });
  describe("add", () => {
    it("should return the correct value when passed 2 numbers", () => {
      expect(add(num1, num2)).toEqual(9);
    });
  });
  describe("subtract", () => {
    it("should return the correct value when passed 2 numbers", () => {
      expect(subtract(num1, num2)).toEqual(3);
    });
  });
});
