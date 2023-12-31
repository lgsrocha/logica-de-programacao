/**
 * Aplicação que deve chamar as funções do Crud
 * Necessário prompt-sync, caso não esteja funcionando execute npm i prompt-sync
 */
const { 
    novaTarefa, 
    editarTarefaPorDescricao, 
    editarTarefaPorId, 
    lerTarefas,
    deletarTarefa,
    pesquisarTarefa,
    tarefas} = require('./todoList.js');

const prompt = require("prompt-sync")();


console.log("--------------------------------")
console.log("\n Bem- vindo(a) à lista de tarefas \n")
console.log("--------------------------------")
main()
function main (){
    // lerTarefas(tarefas)
    // const tarefa = prompt(
    //     `
    //     1 Para adicionar tarefa
    //     2 Para editar uma tarefa
    //     3 Para pesquisar
    // `)   
console.log(`
Digite: 
1 para ver a lista 
2 para adicionar 
3 para editar por Id
4 para editar por descrição
5 para excluir
6 para pesquisar 
7 para sair da aplicação
`)
const escolha = prompt(``)

     
    switch (escolha) {
        case "1":
            lerTarefas(tarefas)
            main()
            break;
        
        case "2":
            let descricao = prompt("Descreva a tarefa: ")
            novaTarefa(descricao)
            main()
            break;

        case "3":
            //por id
            let idAEditar = prompt("Digite o ID da tarefa a ser editada: ")
            let descricaoTarefa = prompt("Digite a nova descricao da tarefa: ")
            let concluir = prompt("deseja concluir a tarefa? S ou N: ")            
            editarTarefaPorId(tarefas, idAEditar,descricaoTarefa, concluir === "s" || "S" ? true : false )
            main()
            break;
            

        case "4":
            //por descricao
            let descricaAEditar = prompt("Digite a descricao da tarefa a ser editada: ")
            let descricaoTarefa2 = prompt("Digite a nova descricao da tarefa: ")
            let concluir2 = prompt("deseja concluir a tarefa? S ou N: ")
            let result
            concluir2 === "S" || "s" ? result = true : result = false

            editarTarefaPorDescricao(tarefas, descricaAEditar,descricaoTarefa2, null)
            main()
            break;
            

        case "5":
            // excluir
            let excluir = parseInt(prompt("Digite o Id da tarefa que deseja excluir: "))
            deletarTarefa(tarefas, excluir)
            main()
            break;

        case "6":
            // pesquisar
            let pesquisa = prompt("Digite parte do texto da tarefa que deseja encontrar: ")
            pesquisarTarefa(tarefas, pesquisa)
            main()
            break;

        case "7":
            // sair
            return;

        default:
            console.log("Opção inválida")
            main()
            break;
    }
}

