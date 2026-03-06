const todolist = [
    {
        etichetta: "prima todo",
        stato: false,
        order: 1,
    },
    {
        etichetta: "seconda todo",
        stato: false,
        order: 2,
    }
];

const listaToDo = document.getElementById("lista-todo");
const btnAdd = document.getElementById("btnAdd");
const inputTodo = document.getElementById("label_in");

disegnaElenco();

function disegnaElenco(){
    listaToDo.innerText = '';

    todolist.forEach(
        function(item) {
            const elementoLi = document.createElement('li');
            elementoLi.innerText= item.etichetta;
            elementoLi.classList.add("todoitem");
            listaToDo.append(elementoLi);
        }
    ); 
}
 

btnAdd.addEventListener("click", addItem);

function addItem(){

    const newtodo = {
        etichetta : inputTodo.value,
        stato : false,
        order: 1,
    }

    todolist.push(newtodo);

    disegnaElenco();
}