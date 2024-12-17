const num1 = parseFloat(prompt("Write the first number: "))
const num2 = parseFloat(prompt("Write the second number: "))

const sum = num1 + num2
const subtraction = num1 - num2
const multiplication = num1 * num2
const division = num1 / num2

alert(
  "Results: \n" +
  "\nSum: " + sum + 
  "\nSubtraction: " + subtraction + 
  "\nMultiplication: " + multiplication + 
  "\nDivision: " + division
)