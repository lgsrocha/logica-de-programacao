const tarefas = [
  {
    id: 0,
    descricao: "Comprar pão",
    dataDeInicio: "19/10/2023, 23:26:05",
    dataDeConclusao: null,
    status: false,
  },
  {
    id: 1,
    descricao: "Comprar leite",
    dataDeInicio: "01/09/2023, 10:10:30",
    dataDeConclusao: null,
    status: false,
  },
  {
    id: 42,
    descricao: "Comprar manteiga",
    dataDeInicio: "08/07/2023, 18:45:37",
    dataDeConclusao: null,
    status: false,
  },
  {
    id: 2,
    descricao: "Comprar café",
    dataDeInicio: "28/08/2023, 14:26:33",
    dataDeConclusao: null,
    status: false,
  },
];

function novaTarefa(descricao) {
  let maiorId = tarefas.reduce((a, b) => (b.id > a ? b.id : a), 0);
  let id = maiorId + 1;
  let dataDeInicio = new Date().toLocaleString("pt-BR");
  let dataDeConclusao = null;
  let status = false;
  let tarefa = { id, descricao, dataDeInicio, dataDeConclusao, status };
  try {
    tarefas.push(tarefa);
    console.log(`tarefa adicionada com sucesso, ID: ${id}`);
  } catch (erro) {
    console.log(erro);
  }
}

function lerTarefas(tarefas) {
  if (tarefas.length === 0) {
    console.log("Lista de Tarefas em Branco!");
    return false;
  } else {
    console.log("Tarefas Cadastradas: ");
    for (const tarefa of tarefas) {
      console.log("ID: ", tarefa.id);
      console.log("Descrição: ", tarefa.descricao);
      console.log("Data de Início: ", tarefa.dataDeInicio);
      if (tarefa.dataDeConclusao === null) {
        console.log("Data de Conclusão: Pendente");
      } else {
        console.log("Data de Conclusão: ", tarefa.dataDeConclusao);
      }
      console.log("Status: ", tarefa.status ? "Concluída" : "Pendente");
      console.log("*".repeat(15));
    }
  }
}

// lerTarefas(tarefas);

function editarTarefaPorId(tarefas, id, novaDescricao, novoStatus) {
  const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id === parseInt(id));
  if (tarefaIndex !== -1) {
    tarefas[tarefaIndex].descricao = novaDescricao;
    if (novoStatus) {
      tarefas[tarefaIndex].status = true;
      tarefas[tarefaIndex].dataDeConclusao = new Date().toLocaleString();
    }
  } else {
    console.log("Tarefa não encontrada com o ID fornecido.");
  }
}

function editarTarefaPorDescricao(
  tarefas,
  descricao,
  novaDescricao,
  novoStatus
) {
  const tarefa = tarefas.find(
    (tarefa) => tarefa.descricao.toLowerCase() === descricao.toLowerCase()
  );
  if (tarefa) {
    tarefa.descricao = novaDescricao;
    if (novoStatus) {
      tarefa.status = true;
      tarefa.dataDeConclusao = new Date().toLocaleString();
    }
  } else {
    console.log("Tarefa não encontrada com a descrição fornecida.");
  }
}

function deletarTarefa(tarefas, id) {
  const tarefaIndex = tarefas.findIndex((item) => item.id === id);

  if (tarefaIndex !== -1) {
    tarefas.splice(tarefaIndex, 1);
    console.log("Tarefa excluída com sucesso!");
  } else {
    console.log("Tarefa não encontrada!");
  }
}

function pesquisarTarefa(tarefas, pesquisa) {
  const tarefasEncontradas = tarefas.filter((tarefa) =>
    tarefa.descricao.toLowerCase().includes(pesquisa.toLowerCase())
  );

  lerTarefas(tarefasEncontradas);
}



/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


const conteudo = document.querySelector(".conteudo");
const ID = document.getElementById("ID");

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
  let thc6 = thlinha.insertCell(5);

  thc1.innerHTML = "ID";
  thc2.innerHTML = "Descrição";
  thc3.innerHTML = "Data de Início";
  thc4.innerHTML = "Data de Conclusão";
  thc5.innerHTML = "Estado";
  thc6.innerHTML = "";
  

  thlinha.classList.add("thlinha");
  thc6.classList.add("acoes")

  // Botão nova tarefa
  let novaTarefaBtn = document.createElement("button");
  novaTarefaBtn.innerHTML = "Nova Tarefa";
  novaTarefaBtn.addEventListener("click", function() {
    let novaDescricao = prompt("Digite sua nova descrição")
    if (novaDescricao.length < 1){
      return alert("Descrição inválida");
    }
    novaTarefa(novaDescricao)
    criar_tabela()
  });
  thc6.appendChild(novaTarefaBtn);

  for (let contador = 0; contador < tarefas.length; contador++) {
    let linha = tabela.insertRow();
    let ID = linha.insertCell(0);
    let descricao = linha.insertCell(1);
    let dataInicio = linha.insertCell(2);
    let dataConclusao = linha.insertCell(3);
    let status = linha.insertCell(4);
    let acoes = linha.insertCell(5);

    
    ID.innerHTML = tarefas[contador].id;
    descricao.innerHTML = tarefas[contador].descricao;
    dataInicio.innerHTML = tarefas[contador].dataDeInicio;
    dataConclusao.innerHTML = tarefas[contador].dataDeConclusao;
    status.innerHTML = tarefas[contador].status === false ? 'A fazer' : 'Feito';

    if (contador >= 0) {
      linha.setAttribute("id",tarefas[contador].id) //setando IDs para cara row da tabela
      ID.classList.add("celula-td");
      descricao.classList.add("celula-td");
      dataInicio.classList.add("celula-td");
      dataConclusao.classList.add("celula-td");
      status.classList.add("celula-td");
      acoes.classList.add("acoes");

      //Botões
      let editarBotao = document.createElement("button");
      editarBotao.innerHTML = "Editar";
      editarBotao.addEventListener("click", function() {
        let novaDescricao = prompt("Digite uma nova descrição para a tarefa")
        if (novaDescricao.length < 1){
          return alert("Descrição inválida");
        }
        editarTarefaPorId(tarefas, parseInt(linha.id), novaDescricao,null)
        criar_tabela()
      });
      acoes.appendChild(editarBotao);
    
      let excluirBotao = document.createElement("button");
      excluirBotao.innerHTML = "Excluir";
      excluirBotao.addEventListener("click", function() {
        deletarTarefa(tarefas, parseInt(linha.id))
        criar_tabela()
      });
      acoes.appendChild(excluirBotao);

      let finalizaBotao = document.createElement("button");
      finalizaBotao.innerHTML = "Finalizar";
      finalizaBotao.addEventListener("click", function() {
        editarTarefaPorId(tarefas, parseInt(linha.id),descricao.innerText,true)
        criar_tabela()
      });

      status.innerText === "Feito" ? "" : acoes.appendChild(finalizaBotao);
    }
  }
  conteudo.appendChild(tabela);
  conteudo.style.display = "block";
}

criar_tabela();
