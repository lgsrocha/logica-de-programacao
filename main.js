/**
 * Aplicação que deve chamar as funções do Crud
 */
const { novaTarefa, editarTarefaPorDescricao, editarTarefaPorId, exibeTarefas } = require('./todoList.js');
const prompt = require("prompt-sync")();


console.log("--------------------------------")
console.log("\n bem vindo a lista de tarefas \n")
console.log("--------------------------------")
const escolha = prompt("Digite 1 para ver a lista, 2 para adicionar um item ou 3 para editar: ")
if (escolha === "1"){
    exibeTarefas()
}