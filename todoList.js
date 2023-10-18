/*
    Qual é a estrutura da lista de tarefas?
    descrição, data, status, id (?)
    @Lucas
 */

    const tarefas = [
        {id: 0, descricao: 'Comprar pão', data: '01/09/2023', status: 'pendente'},
        {id: 1, descricao: 'Comprar leite', data: '01/09/2023', status: 'pendente'},
        {id: 2, descricao: 'Comprar manteiga', data: '01/09/2023', status: 'pendente'},
        {id: 3, descricao: 'Comprar café', data: '01/09/2023', status: 'pendente'},
    ]

/*
    Add @Lucas
*/


function novaTarefa(descricao){
    let id = tarefas.length;
    let data = new Date().toLocaleDateString('pt-BR');
    let status = 'pendente';
    let tarefa = {id, descricao, data, status};
    tarefas.push(tarefa);
}
novaTarefa("Entregar projeto no prazo") //Exemplo de uso 

/*
    Ler
*/

/*
    Editar
*/

/*
    Deletar
*/

/*
    Pesquisar
*/