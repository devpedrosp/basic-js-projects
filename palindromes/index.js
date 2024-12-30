// variável que armazena valor digitado pelo usuário
const word = prompt("Bem vindo ao Robô dos Palíndromos" + "\nInforme a palavra: ")
// variável para armazenar a palavra invertida
let reverseWord = ""
// i = tamanho de word - 1 ; i maior ou igual a 0 ; decrementa 1 do i  
for (let i = word.length - 1 ; i >= 0 ; i--) {
    reverseWord += word[i]
}
// verificação se word é igual a reverseWord
if (word === reverseWord ) {
    // se true é um palíndromo
    alert(word + " é um palíndromo")
} else {
    // se false não é um palíndromo e mostra o resultado obtido
    alert(word + " não é um palíndromo \n" + word + " != " + reverseWord)
}

// mensagem de encerramento
alert("closing...")