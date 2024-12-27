// Valor em metros
const measure = parseFloat(prompt("Informe o valor em metros: "))

// Opções para conversão do valor em metros
const measureOption = prompt(
  "Escolha a opção de medida à ser convertida: " +
  "\n milímetro (mm)" +
  "\n centímetro (cm)" +
  "\n decímetro (dm)" +
  "\n decâmetro (dam)" +
  "\n hectômetro (hm)" +
  "\n quilômetro (km)" 
)

// Valor convertido se inicia = 0 
let convertedValue = 0

// Expressões para calculo do valor convertido final
switch (measureOption) {
  case "mm":
    convertedValue = measure * 1000 
    break
  case "cm":
    convertedValue = measure * 100
    break
  case "dm":
    convertedValue = measure * 10 
    break
  case "dam":
    convertedValue = measure / 10 
    break
  case "hm":
    convertedValue = measure / 100 
    break
  case "km":
    convertedValue = measure / 1000
    break
  default:
    alert("Opção inválida")
}
// Alerta do resultado da expressão
alert("O valor de " + measure + " metros é = " + convertedValue + " " + measureOption)