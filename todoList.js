/*
    Qual é a estrutura da lista de tarefas?
    descrição, data, status, id (?)
    @Lucas
 */

const tarefas = [
    {id: 0, descricao: 'Comprar pão', dataDeInicio: '01/09/2023', dataDeConclusao: '01/09/2023', status: false},
    {id: 1, descricao: 'Comprar leite', dataDeInicio: '01/09/2023', dataDeConclusao: '01/09/2023', status: false},
    {id: 2, descricao: 'Comprar manteiga', dataDeInicio: '01/09/2023', dataDeConclusao: '01/09/2023', status: false},
    {id: 3, descricao: 'Comprar café', dataDeInicio: '01/09/2023', dataDeConclusao: '01/09/2023', status: false},
]

/*
    Add @Lucas
*/


function novaTarefa(descricao){
    let id = tarefas.length;
    let data = new Date().toLocaleDateString('pt-BR');
    let status = false;
    let tarefa = {id, descricao, data, status};
    tarefas.push(tarefa);
}
novaTarefa("Entregar projeto no prazo") //Exemplo de uso 

/*
    Ler @Alan
*/

/*
    Editar @Samir
*/

/*
    Deletar @Dani
*/

/*
    Pesquisar @Dani
*/