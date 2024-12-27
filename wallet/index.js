// variavel de condição inicia vazia
let option = ""
// variavel que armazena a quantidade de dinheiro
let money = parseFloat(prompt("Informe a quantidade de dinheiro inicial: "))
// mesmo que a condição incial seja falsa a linha de codigo "do" é iniciada uma vez 
do {
    // menu com as opções para a condição e o dinheiro armazenado
    option = prompt(
        "Dinheiro disponivel: " + money +
        "\n1) Adicionar dinheiro" +
        "\n2) Remover dinheiro" +
        "\n3) Encerrar"
    )
    switch (option) {
        // o valor sera somado da quantidade já armazenada
        case "1":
            money += parseFloat(prompt("Qual o valor para adicionar: "))
            alert("Dinheiro adicionado com sucesso!")
            break;
        // o valor sera retirado da quantidade já armazenada
        case "2":
            money -= parseFloat(prompt("Qual o valor para remover: "))
            alert("Dinheiro removido com sucesso!")
            break;
        // opção para deixar a condição falsa
        case "3":
            alert("Encerrando o sistema.")
            break;
        default:
            alert("Opção inválida")
            break;
    }
    // o codigo se repete até que a opção escolhida seja = 3
} while (option !== "3");


// mensagem de conclusão
alert("Sistema finalizado")