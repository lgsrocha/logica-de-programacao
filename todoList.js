/*
    Qual é a estrutura da lista de tarefas?
    descrição, data, status, id (?)
    @Lucas
 */

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

/*
    Add @Lucas
*/

function novaTarefa(descricao) {
    let maiorId = tarefas.reduce((a, b) => b.id > a ? b.id : a, 0);
    let id = maiorId + 1;
    let dataDeInicio = new Date().toLocaleString("pt-BR");
    let dataDeConclusao = null;
    let status = false;
    let tarefa = { id, descricao, dataDeInicio, dataDeConclusao, status };
    try{
      tarefas.push(tarefa);
      console.log(`tarefa adicionada com sucesso, ID: ${id}`)}
    catch(erro) {
      console.log(erro)
    }
}
// novaTarefa("Entregar projeto no prazo"); //Exemplo de uso

/*
    Ler @Alan
*/

function exibeTarefas(){
  return console.log(tarefas)
}

/*
    Editar @Samir
*/
function editarTarefaPorId(tarefas, id, novaDescricao, novoStatus) {
  const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id === id);
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
// editarTarefaPorId(tarefas, 0, 'descrição atualizada', true)


function editarTarefaPorDescricao(tarefas, descricao, novaDescricao, novoStatus) {
  const tarefa = tarefas.find((tarefa) => tarefa.descricao.toLowerCase() === descricao.toLowerCase());
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

// editarTarefaPorDescricao(tarefas, "Comprar manteigx", "Comprar muita margarina", true)
// console.log("tarefas",tarefas)

/*
    Deletar @Dani
*/

/*
    Pesquisar @Dani
*/
module.exports = { novaTarefa, editarTarefaPorDescricao, editarTarefaPorId, exibeTarefas}