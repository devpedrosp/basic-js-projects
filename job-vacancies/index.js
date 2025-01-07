// vagas salvas:
const vacancies = []
function listVacancies() {
    // valindando o índice informado
    if (vacancies.length <= 0) {
        alert("Sem vagas no momento.")
        // index inválido: retorna para o menu
        return
    }
    const vacancyString = vacancies.reduce(function (finalText, vacancy, index) {
      finalText += index + ". "
      finalText += vacancy.nameVacancy
      finalText += " (" + vacancy.candidates.length + " candidatos)\n"
      return finalText
    }, "")
  
    alert(vacancyString)
}
  
function newVacancy() {
    const nameVacancy = prompt("Informe um nome para a vaga:")
    const description = prompt("Informe um descrição para a vaga:")
    const closingDate = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")

    const confirmation = confirm(
      "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " + nameVacancy + "\nDescrição: " + description + "\nData limite: " + closingDate
    )
    // confirmação válida: push no objeto novaVaga paga o array vagas 
    if (confirmation) {
      const newVacancy = { nameVacancy, description, closingDate, candidates: [] }
      vacancies.push(newVacancy)
      alert("Vaga criada.")
    }
}

function displayVacancy() {
    const index = prompt("Informe o índice da vaga que deseja exibir:")
    // valindando o índice informado
    if (index >= vacancies.length || index < 0) {
        alert("índice inválido")
        // index inválido: retorna para o menu
        return
    }
    // variável armazenando o objeto dentro do array pelo index
    const vacancy = vacancies[index]

    const candidatesString = vacancy.candidates.reduce(function (finalText, candidate) {
        return finalText + "\n - " + candidate
    }, "")
    alert(
      "Vaga nº " + index +
      "\nNome: " + vacancy.nameVacancy +
      "\nDescrição: " + vacancy.description +
      "\nData limite: " + vacancy.closingDate +
      "\nQuantidade de candidatos: " + vacancy.candidates.length +
      "\nCandidatos inscritos:" + candidatesString
    )
}
  
function registerCandidate() {
    const candidate = prompt("Informe o nome do(a) candidato(a):")
    const index = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    // valindando o índice informado
    if (index >= vacancies.length || index < 0) {
        alert("índice inválido.")
        // index inválido: retorna para o menu
        return
    }
    // variável armazenando o objeto dentro do array pelo index
    const vacancy = vacancies[index]
    const confirmation = confirm(
      "Deseja inscrever o candidato " + candidate + " na vaga " + index + "?\n" +
      "Nome: " + vacancy.nameVacancy + "\nDescrição: " + vacancy.description + "\nData limite: " + vacancy.closingDate
    )
    // confirmação válida: push no candidato paga vaga selecionado pelo índice
    if (confirmation) {
        vacancy.candidates.push(candidate)
      alert("Inscrição realizada")
    }
}
  
function deleteVacancy() {
    // Verificando se há vagas cadastradas
    if (vacancies.length === 0) {
        alert("Sem vagas no momento.");
        return;
    }
    const index = prompt("Informe o índice da vaga que deseja excluir:");
    // validando o índice informado
    if (isNaN(index) || index < 0 || index >= vacancies.length) {
        alert("Índice inválido.");
        return;
    }
    // variável armazenando o objeto dentro do array pelo index
    const vacancy = vacancies[index];
    const confirmation = confirm(
        "Tem certeza que deseja excluir a vaga " + index + "?\n" +
        "Nome: " + vacancy.nameVacancy + "\nDescrição: " + vacancy.description + "\nData limite: " + vacancy.closingDate
    );
    // confirmação válida: splice na vaga selecionado pelo índice
    if (confirmation) {
        vacancies.splice(index, 1);
        alert("Vaga excluída.");
    }
}

function displayMenu() {
    const option = prompt(
      "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
    )
    return option
}
  
function executar() {
    let option = ""
    do {
      option = displayMenu()
      switch (option) {
        case "1":
          listVacancies()
          break
        case "2":
          newVacancy()
          break
        case "3":
          displayVacancy()
          break
        case "4":
          registerCandidate()
          break
        case "5":
          deleteVacancy()
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida.")
      }
    } while (option !== "6");
}
executar()
  
  