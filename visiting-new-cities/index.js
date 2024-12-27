const touristName = prompt("Informe o nome do turista: ")
// contagem das cidades inicia em 0
let citiesCount = 0
// variavel que vai armazenar os nomes das cidades inicia vazia
let nameCities = ""
// variavel que faz a verificação da condição
let proceed = prompt("Você visitou alguma cidade? (s/n)")

while (proceed === "s") {
  let nameCity = prompt("Qual é o nome da cidade visitada?")
  //é incrementado o nome digitado
  nameCities += " - " + nameCity + "\n"
  // na contagem é incrementada +1
  citiesCount++
  //verificação da condição para repetição
  proceed = prompt("Você visitou alguma outra cidade? (s/n)")
}
// após a condição ser falsa, apresenta os dados obtidos.
alert(
  "Turista: " + touristName +
  "\nQuantidade de cidades visitadas: " + citiesCount +
  "\n Cidades visitadas: \n" + nameCities
)
