const vehicle1 = prompt("Digite o nome do primeiro veículo:")
const vehicleSpeed1 = parseFloat(prompt("Digite a velocidade do veículo: " + vehicle1))
const vehicle2 = prompt("Digite o nome do segundo veículo:")
const vehicleSpeed2 = parseFloat(prompt("Digite a velocidade do veículo: " + vehicle2))

if (vehicleSpeed1 > vehicleSpeed2) {
  alert("O veículo  " + vehicle1 + " é mais rápido")
} else if (vehicleSpeed2 > vehicleSpeed1){
  alert("O veículo  " + vehicle2 + " é mais rápido")
} else {
  alert("As velocidades dos veículos: " + vehicle1 + " e " + vehicle2 + " são iguais")
}