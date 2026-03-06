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

todolist.forEach(
    function(item) {
        const elementoLi = document.createElement('li');
        elementoLi.innerText= item.etichetta;
        listaToDo.append(elementoLi);
    }
);  