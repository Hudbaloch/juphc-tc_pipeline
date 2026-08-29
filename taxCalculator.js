function calculateTax(income) {
  if (income <= 10000) {
    return income * 0.10;
  } else if (income <= 30000) {
    return 1000 + (income - 10000) * 0.15;
  } else {
    return 4000 + (income - 30000) * 0.20;
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    calculateTax
  };
}