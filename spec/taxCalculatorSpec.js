const { calculateTax } = require("../taxCalculator");

describe("Tax Calculator", () => {
  it("should calculate 10% tax for income of 5000", () => {
    expect(calculateTax(5000)).toBe(500);
  });

  it("should calculate 10% tax for income of 10000", () => {
    expect(calculateTax(10000)).toBe(1000);
  });

  it("should calculate 15% tax for income of 20000", () => {
    expect(calculateTax(20000)).toBe(2500);
  });

  it("should calculate 15% tax for income of 30000", () => {
    expect(calculateTax(30000)).toBe(4000);
  });

  it("should calculate 20% tax for income of 40000", () => {
    expect(calculateTax(40000)).toBe(6000);
  });

  it("should calculate zero tax for zero income", () => {
    expect(calculateTax(0)).toBe(0);
  });

  it("should calculate tax for income of 50000", () => {
    expect(calculateTax(50000)).toBe(8000);
  });
});