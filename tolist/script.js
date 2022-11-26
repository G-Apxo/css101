const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todo");


const todo = JSON.parse(localStorage.getItem('todo'))

form.addEventListener("submit", (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    console.log(input.value)

    if(todo){
        todoText = todo.text
    }
    if(todoText) {
        //es mushaobs
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add("completed")
            // console.log("completed")
        } 
        todoEl.innerText = todoText
        //esec mushaobs
        todoEl.addEventListener('click', () => {
            // console.log("completed / done")
            todoEl.classList.toggle("completed")
            updateLs()
        })
        //es mushaobs
        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault()
            
            todoEl.remove()
            updateLs()
        })
        // esec mushaobs
        todosUL.appendChild(todoEl)

        input.value = ''
        updateLs()

    }

}
//aq dagvendzra
function updateLs() {
    todosEl = document.querySelectorAll("li")
   
    const todos = []
    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        })
    });
    console.log(todos)
    localStorage.setItem('todos', JSON.stringify(todos))
}