// Dados personagem atacante
const character1 = prompt("Digite o nome do primeiro personagem: ")
const character1PowerAttack = parseFloat(prompt("Digite o poder de ataque do personagem " + character1 + ":"))

// Dados personagem defensor
const character2 = prompt("Digite o nome do segundo personagem: ")
const character2Life = parseFloat(prompt("Digite a quantidade de pontos de vida do personagem " + character2 + ":"))
const character2PowerDefense = parseFloat(prompt("Digite o poder de defesa do personagem " + character2 + ":"))
const character2Shield = prompt("O personagem " + character2 + " possui escudo? (s/n)")

// Dano causado inicia = 0 
let damage = 0

// If e else para quantificar o dano causado.
if (character1PowerAttack > character2PowerDefense && character2Shield === "n") {
  damage =  character1PowerAttack - character2PowerDefense
} else if (character1PowerAttack > character2PowerDefense && character2Shield === "s") {
  damage =  ((character1PowerAttack - character2PowerDefense) / 2)
} else {
  // damage = 0
}

//  Conta para a vida final do defensor
const character2FinalLife = character2Life - damage

// Alerta do dano causado
alert("A quantidade de dano de " + character1 + " causada ao defensor " + character2 + " foi = " + damage)

// Alerta com todas informações dos personagens
alert(
  "Personagem: " + character1 +
  "\n Poder de Ataque = " + character1PowerAttack +

  "\n\nPersonagem: " + character2 +
  "\n Quantidade de vida inicial = " + character2Life +
  "\n Poder de Defesa = " + character2PowerDefense +
  "\n Escudo (s/n): " + character2Shield +
  "\n Quantidade de vida final = " + character2FinalLife 
)