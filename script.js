function calculate() {
  const income = Number(document.getElementById("income").value);
  const tax = calculateTax(income);

  document.getElementById("result").textContent =
    `Your tax is: ${tax}`;
}