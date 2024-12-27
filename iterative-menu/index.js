// variavel de condição inicia vazia
let option = ""
// mesmo que a condição incial seja falsa a linha de codigo "do" é iniciada uma vez 
do {
    // menu com as opções para a condição
    option = prompt(
        "Escolha a opção desejada: " +
        "\n1) Opção 1" +
        "\n2) Opção 2" +
        "\n3) Opção 3" +
        "\n4) Opção 4" +
        "\n5) Encerrar" 
    )
    switch (option) {
        // valor digitado seja = 1
        case "1":
            alert("Opção 1")
            break;
        // valor digitado seja = 2
        case "2":
            alert("Opção 2")
            break;
        // valor digitado seja = 3
        case "3":
            alert("Opção 3")
            break;
        // valor digitado seja = 4
        case "4":
            alert("Opção 4")
            break;
        // valor digitado seja = 5
        case "5":
            alert("Encerrando o sistema...")
            break;
        default:
            alert("Opção inválida")
            break;
    }
    // o codigo se repete até que a opção escolhida seja = 5
} while (option !== "5");

// mensagem de conclusão
alert("Sistema finalizado")