/**
 * Aplicação que deve chamar as funções do Crud
 * Necessário prompt-sync, caso não esteja funcionando execute npm i prompt-sync
 */
const { novaTarefa, editarTarefaPorDescricao, editarTarefaPorId, lerTarefas, tarefas } = require('./todoList.js');
const prompt = require("prompt-sync")();


console.log("--------------------------------")
console.log("\n bem vindo a lista de tarefas \n")
console.log("--------------------------------")
function main (){
    const escolha = prompt("Digite 1 para ver a lista, 2 para adicionar um item ou 3 para editar: ")
    switch (escolha) {
        case "1":
            lerTarefas(tarefas)
            break;

        case "2":
            let descricao = prompt("Descreva a tarefa: ")
            novaTarefa(descricao)
            main()
            break;

        case "3":
            break;

        case "4":
            
            break;

        default:
            console.log("Opção inválida")
            break;
    }
}