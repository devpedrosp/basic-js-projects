// variável que armazena valor digitado pelo usuário
const num = parseFloat(prompt("Bem vindo ao Robô da Tabuada" + "\nInforme o número para a tabuada mágica: "))
// variável para armazenar os resultados
let tableAccounts = ""
for (let i = 1; i <= 20; i++) {
    tableAccounts += num + " * " + i + " = " + (num * i) + "\n";
}
// exibir os resultados armazanados na tela
alert("Resultados Robô da tabuada:\n" + tableAccounts)
// mensagem de encerramento
alert("closing...")