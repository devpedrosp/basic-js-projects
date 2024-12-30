// variavel de condição inicia vazia
let option = ""
// array de pacientes
let queue = []
// mesmo que a condição incial seja falsa a linha de codigo "do" é iniciada uma vez 
do {
    // armazena os pacientes que vieram do array "queue" atraves do for
    let patients = ""
    for (let i = 0; i < queue.length; i++) {
      patients += (i + 1) + "º - " + queue[i] + "\n"
    }
    // menu com as opções para a condição
    option = prompt(
        "Consultório Médico Fhelp: \n" +
        "Pacientes: \n" + 
        patients +
        "\n1) Novo Paciente" +
        "\n2) Consultar Paciente" +
        "\n3) Encerrar"
    )
    switch (option) {
        // valor digitado seja = 1
        case "1":
            // recebe o valor do novo paciente e armazena com o push
            let newPatient = prompt("Digite o nome do paciente: ")
            queue.push(newPatient)
            break;
        // valor digitado seja = 2
        case "2":
            // verifica se existe pacientes no array
            if (queue.length > 0) {
                // se true retira o primeiro paciente com o shift e mostra na tela
                let consultedPatient = queue.shift()
                alert("Paciente consultado: " + consultedPatient)   
            } else {
                // se nao avisa ao úsuario que não há pacientes
                alert("Não há pacientes na fila")
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