// variavel de condição inicia vazia
let option = ""
// array de cartas
let cardQueue = []
// mesmo que a condição incial seja falsa a linha de codigo "do" é iniciada uma vez 
do {
    let cardCount = cardQueue.length
    // menu com as opções para a condição
    option = prompt(
        "Pilha de Cartas: \n" +
        "Quantidade de cartas no baralho: " + cardCount +
        "\n1) Adicionar uma carta" +
        "\n2) Puxar uma carta" +
        "\n3) Encerrar"
    )
    switch (option) {
        // valor digitado seja = 1
        case "1":
            // recebe o valor da nova carta e armazena com o push
            cardQueue.push(prompt("Nome da carta: "))
            break;
        // valor digitado seja = 2
        case "2":
            // verifica se existe cartas no array
            if (cardCount > 0) {
                // se true retira a ultima carta como pop e mostra na tela
                let cardRemoved = cardQueue.pop()
                alert("Carta Removida: " + cardRemoved)
            } else {
                // se false avisa ao úsuario que não há cartas
                alert("Não há cartas na fila.")
            }
            break;
        // valor digitado seja = 3
        case "3":
            alert("Encerrando o sistema...")
            break;
        default:
            alert("Opção inválida")
            break;
    }
// o codigo se repete até que a opção escolhida seja = 3
} while (option !== "3");

// mensagem de encerramento
alert("Sistema finalizado")