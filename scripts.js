const { tarefas } = require("./todoList");

const conteudo = document.querySelector(".conteudo");
const ID = document.getElementById("ID");

const lista = [];

function criar_tabela() {
  conteudo.innerHTML = "";

  let tabela = document.createElement("table");
  let th = tabela.createTHead();
  let thlinha = th.insertRow();

  let thc1 = thlinha.insertCell(0);
  let thc2 = thlinha.insertCell(1);
  let thc3 = thlinha.insertCell(2);
  let thc4 = thlinha.insertCell(3);
  let thc5 = thlinha.insertCell(4);

  thc1.innerHTML = "ID";
  thc2.innerHTML = "Descrição";
  thc3.innerHTML = "Data de Início";
  thc4.innerHTML = "Data de Conclusão";
  thc5.innerHTML = "Status";

  thlinha.classList.add("thlinha");

  for (let contador = 0; contador < lista_pessoas.length; contador++) {
    let linha = tabela.insertRow();
    let ID = linha.insertCell(0);
    let descricao = linha.insertCell(1);
    let dataInicio = linha.insertCell(2);
    let dataConclusao = linha.insertCell(3);
    let status = linha.insertCell(4);

    ID.innerHTML = tarefas[contador].id;
    descricao.innerHTML = tarefas[contador].descricao;
    dataInicio.innerHTML = tarefas[contador].dataDeInicio;
    dataConclusao.innerHTML = tarefas[contador].dataDeConclusao;
    status.innerHTML = tarefas[contador].status;

    if (contador >= 0) {
      ID.classList.add("celula-td");
      descricao.classList.add("celula-td");
      dataInicio.classList.add("celula-td");
      dataConclusao.classList.add("celula-td");
      status.classList.add("celula-td");
    }
  }
  conteudo.appendChild(tabela);

  conteudo.style.display = "block";
}
