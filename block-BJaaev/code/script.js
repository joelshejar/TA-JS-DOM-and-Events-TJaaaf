let input = document.querySelector(".new-todo")

let completed = document.querySelector('.completed')
let all = document.querySelector('.all')
let active = document.querySelector('.active')

let random = document.querySelector('.todo-list')


let allTodos = JSON.parse(localStorage.getItem('todos')) || []

let newTodo = document.querySelector('.new-todo')

function handleInput(event){
    let value = event.target.value
    if (event.keyCode === 13 && value != ''){
        let todo = {
            task: value,
            isDone: false,
        }
        allTodos.push(todo)
        event.target.value = ''
        createUI(allTodos, random)
    }
    localStorage.setItem(
        "todos",
        JSON.stringify(allTodos)
    )
}

function handleDelete(event){
    
    let id = event.target.dataset.id
    
    allTodos.splice(id, 1)
    
    localStorage.setItem(
        "todos",
        JSON.stringify(allTodos) 
    )
    createUI(allTodos, random)
}

function handleToggle(event){
    let id = event.target.dataset.id
    allTodos[id].isDone = !allTodos[id].isDone
    if(allTodos[id].isDone ===true){
        let p =document.querySelector('p')
        p.style.textDecoration = 'line-through'
    }
    
    
    localStorage.setItem(
        "todos",
        JSON.stringify(allTodos)
    )
    createUI(allTodos, random)
}
function handleToggleActive(event){
    let id = event.target.dataset.id
    allTodos[id].isDone = !allTodos[id].isDone
    if(allTodos[id].isDone ===true){
        let p =document.querySelector('p')
        p.style.textDecoration = 'line-through'
    }
    
    
    localStorage.setItem(
        "todos",
        JSON.stringify(allTodos)
    )
    createActive(allTodos, random)
}
function handleToggleCompleted(event){
    let id = event.target.dataset.id
    allTodos[id].isDone = !allTodos[id].isDone
    if(allTodos[id].isDone ===true){
        let p =document.querySelector('p')
        p.style.textDecoration = 'line-through'
    }
    
    
    localStorage.setItem(
        "todos",
        JSON.stringify(allTodos)
    )
    createCompleted(allTodos, random)
}
function handleAll(){
    createUI(allTodos, random)
}

function handleDeleteCompleted(event){
    
    let id = event.target.dataset.id
    
    allTodos.splice(id, 1)
    
    localStorage.setItem(
        "todos",
        JSON.stringify(allTodos) 
    )
    createCompleted(allTodos, random)
}

function handleDeleteActive(event){
    let id = event.target.dataset.id
    
    allTodos.splice(id, 1)
    
    localStorage.setItem(
        "todos",
        JSON.stringify(allTodos) 
    )
    createActive(allTodos, random)
}

function handleCompleted(event){
    
    let span1 = document.querySelector('span')
    span1.addEventListener('click', handleDeleteCompleted)

    createCompleted(allTodos, random)
    
}

function handleActive(){
    createActive(allTodos, random)
}




completed.addEventListener('click', handleCompleted)
all.addEventListener('click', handleAll)
active.addEventListener('click', handleActive)
newTodo.addEventListener('keydown', handleInput)






function createUI(data, rootElm){
    rootElm.innerHTML = ""
    data.forEach((todo, index) =>{
        let li = document.createElement("li")
        let input = document.createElement("input")
        input.type = "checkbox"
        input.addEventListener("input", handleToggle)
        input.setAttribute("data-id", index)
        input.checked = todo.isDone
        let p = document.createElement("p")
        p.innerText = todo.task
        if(todo.isDone === true){
            p.style.textDecoration = 'line-through'
        }
        let span = document.createElement("span")
        span.innerText = 'X'
        span.setAttribute("data-id", index)
        span.addEventListener("click", handleDelete)

        li.append(input, p, span)
        rootElm.append(li)

    })

}
function createActive(data, rootElm){
    rootElm.innerHTML = ""
    data.forEach((todo, index) => {
        if(todo.isDone == false){
            let li = document.createElement("li")
            let input = document.createElement("input")
            input.type = "checkbox"
            input.addEventListener("input", handleToggleActive)
            input.setAttribute("data-id", index)
            input.checked = todo.isDone
            let p = document.createElement("p")
            p.innerText = todo.task
            if(todo.isDone === true){
                p.style.textDecoration = 'line-through'
            }
            let span = document.createElement("span")
            span.innerText = 'X'
            span.setAttribute("data-id", index)
            span.addEventListener("click", handleDeleteActive)

            li.append(input, p, span)
            rootElm.append(li)

        }
    })
}


function createCompleted(data, rootElm){
    rootElm.innerHTML = ""
    data.forEach((todo, index) => {
        if(todo.isDone == true){
            let li = document.createElement("li")
            let input = document.createElement("input")
            input.classList.add('checkmark')
            input.type = "checkbox"
            input.addEventListener("input", handleToggleCompleted)
            input.setAttribute("data-id", index)
            input.checked = todo.isDone
            let p = document.createElement("p")
            p.innerText = todo.task
            if(todo.isDone === true){
                p.style.textDecoration = 'line-through'
            }
            let span = document.createElement("span")
            span.innerText = 'X'
            span.setAttribute("data-id", index)
            span.addEventListener("click", handleDeleteCompleted)

            li.append(input, p, span)
            rootElm.append(li)

        }
    })
}

































