const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");
eventListeners();
function eventListeners(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deletetodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}
function addTodo(e){
    let newTodo=todoInput.value.trim();
    if(newTodo===""){
        showAlert("danger","Please enter a todo.");
    }
    else{
        addTodoToUI(newTodo); //Add function to interface
        addTodosToStorage(newTodo);
        showAlert("success","Todo has been successfully added!");
    }
    todoInput.value="";
    e.preventDefault();
}
function filterTodos(e){
    const filterValue=e.target.value.toLowarCase();
    const listItems=document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listItem){
        const text=listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)===-1){
            listItem.setAttribute("style","display:none !important;");
        }
        else{
            listItem.setAttribute("style","display:block;");
        }
    })
};
function deletetodo(e){
    if(e.target.className==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("info","Todo has been deleted");
    }
};
function deleteTodoFromStorage(deleteTodo){
    let todos=getTodosFromStorage();
    todos.forEach(function(todo,index){
        if(todo==deleteTodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
};
function addTodosToStorage(newTodo){
    let todos=getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
};
function getTodosFromStorage(){ //takes todos from storage
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function loadAllTodosToUI(){
    let todos=getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}
function showAlert(type,message){
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=message;
    firstCardBody.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 1000);
};
function addTodoToUI(newTodo){
    const listItem=document.createElement("li");
    const link=document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class='fa fa-remove'></i>";
    listItem.className="list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
};
function clearAllTodos(){
    if(confirm("Are you sure you want to delete all?")){
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
};