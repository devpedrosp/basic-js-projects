function startMenu() {
    // mesmo que a condição incial seja falsa a linha de codigo "do" é iniciada uma vez 
    do {
        // variavel de condição 
        let option = ""
        // variavel que vai armazenar o resultado 
        let result = ""
        // menu com as opções para a condição
        option = prompt(
            "Geometric Calculator: " +
            "\n1) Área de um triângulo" +
            "\n2) Área de um retângulo" +
            "\n3) Área de um quadrado" +
            "\n4) Área de um trapézio" +
            "\n5) Área de um círculo" +
            "\n6) Encerrar" 
        )
        switch (option) {
            // valor digitado seja = 1
            case "1":
                result = triangleArea()
                break;
            // valor digitado seja = 2
            case "2":
                result = rectangleArea()
                break;
            // valor digitado seja = 3
            case "3":
                result = squareArea()
                break;
            // valor digitado seja = 4
            case "4":
                result = trapezeArea()
                break;
            // valor digitado seja = 5
            case "5":
                result = circleArea()
                break;
            // valor digitado seja = 6
            case "6":
                alert("Encerrando o sistema...")
                break;
            default:
                alert("Opção inválida")
                break;
        }
        if (result) {
            alert("O resultado da área é: " + result)
        }
        // o codigo se repete até que a opção escolhida seja = 6
    } while (option !== "6");
}
function triangleArea() {
    const base = parseFloat(prompt("Informe a base do triângulo: "))
    const height = parseFloat(prompt("Informe a altura do triângulo:"))
    return ((base * height) / 2)
}
function rectangleArea() {
    const base = parseFloat(prompt("Informe a base do retângulo: "))
    const height = parseFloat(prompt("Informe a altura do retângulo:"))
    return (base * height)
}
function squareArea() {
    const base = parseFloat(prompt("Informe a base do quadrado: "))
    return (base * base)
}
function trapezeArea() {
    const smallerBase = parseFloat(prompt("Informe a base menor do trapézio: "))
    const base = parseFloat(prompt("Informe a base maior do trapézio:"))
    const height = parseFloat(prompt("Informe a altura do trapézio:"))
    return ((base + smallerBase)* height / 2)
}
function circleArea() {
    const pi = 3.14
    const ray = parseFloat(prompt("Informe o raio do círculo: "))
    return (pi * (ray * ray))
}
startMenu()
// mensagem de conclusão
alert("Sistema finalizado")