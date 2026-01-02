const todoList = [{name: 'A', date: '2026-10-10'}, {name: 'B', date: '2026-07-01'}];
renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const {name} = todoObject;
        const {date} = todoObject;
        const html = `
            <div>${name}</div>
            <div> ${date}</div>
            <button class = "delete-btn" onclick = "
                todoList.splice(${i}, 1);renderTodoList();
            ">Delete</button>
            `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const nameInputElement = document.querySelector(".js-name-input");
    const dateInputElement = document.querySelector(".js-date-input");

    const nameValue = nameInputElement.value;
    const dateValue = dateInputElement.value;
    todoList.push({name: nameValue, date: dateValue});

    nameInputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
}