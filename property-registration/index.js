// variavel de condição inicia vazia
let option = ""
// array de imóveis
const properties = []
// mesmo que a condição incial seja falsa a linha de codigo "do" é iniciada uma vez 
let propertiesShow = ""
do {
    // menu com as opções para a condição
    option = prompt(
        "Cadastro de Imóveis: \n" +
        "Quantidade de imóveis cadastrados: " + properties.length +
        "\n1) Salvar um imóvel" +
        "\n2) Mostrar todos os imóveis salvos" +
        "\n3) Encerrar"
    )
    switch (option) {
        // valor digitado seja = 1
        case "1":
            // 
            const property = {}
            property.owner = prompt("Nome do Proprietário: ")
            property.bedroom = prompt("Quantidade de quartos: ")
            property.bathroom = prompt("Quantidade de banheiros: ")
            property.garage = prompt("Possui garagem? (sim/não)")
            const confirmation = confirm(
                "Salvar este imóvel?\n" +
                "\n Proprietário: " + property.owner +
                "\n Quartos: " + property.bedroom +
                "\n Banheiros: " + property.bathroom +
                "\n Garagem: " + property.garage 
            )
            if (confirmation) {
                properties.push(property)
                alert("Imóvel salvo com sucesso!")
            } else {
                alert("Voltando ao menu...")
            }
            break;
        // valor digitado seja = 2
        case "2":
            // 
            if (properties.length > 0) {
                for (let i = 0; i < properties.length; i++) {
                    alert(
                        "Imóvel " + (i + 1) +
                        "\n Proprietário: " + properties[i].owner +
                        "\n Quartos: " + properties[i].bedroom +
                        "\n Banheiros: " + properties[i].bathroom +
                        "\n Possui garagem? " + properties[i].garage 
                    )
                } 
            } else {
                // 
                alert("Não há imóveis registrados.")
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