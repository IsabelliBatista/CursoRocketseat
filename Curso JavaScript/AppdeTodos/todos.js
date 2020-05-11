var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//o array
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
function renderTodos() {
    //para nao acontecer de renderizar tudo de novo quando adicionar mais um todo
    listElement.innerHTML = '';

    // essa funcão serve para arrays
    for (todo of todos) {
        //vai criar a li
        var todoElement = document.createElement('li')
        //vai criar o elemento texto na li
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        //procura a posição no array
        var pos = todos.indexOf(todo);
        //cria um metodo onclick pra clicar e excluir com a funçao abaixo
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);


        //basicamente o appendchild faz ele aparecer
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    //pegar conteudo digitado
    var todoText = inputElement.value;

    //vai incluir no ultimo do array
    todos.push(todoText);

    //vai deixar vazio o input
    inputElement.value = ' ';

    //vai renderizar novamente
    renderTodos();
    saveToStorage();

}

function deleteTodo(pos) {
    //remove itens(posição, quantos itens)
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

//adiciona na storage
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}