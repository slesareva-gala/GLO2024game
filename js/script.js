// Урок 13 ToDo

"use strict";

const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

const storage = {
    is: localStorage.getItem('toDoData') ? true : false,
    set: (arr) => localStorage.setItem('toDoData', JSON.stringify(arr)),
    get: () => storage.is ? JSON.parse(localStorage.getItem('toDoData')) : []
}

const render = () => {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''

    storage.set(toDoData)

    toDoData.forEach((item, index) => {
        const li = document.createElement('li')
        li.classList.add('todo-item')
        li.innerHTML = `<span class="text-todo">${item.text}</span>
        <div class="todo-buttons">
			<button class="todo-remove"></button>
			<button class="todo-complete"></button>
		</div>
        `
        if (item.completed) todoCompleted.append(li)
        else todoList.append(li)

        li.querySelector('.todo-complete').addEventListener('click', () => {
            item.completed = !item.completed
            render()
        })
        li.querySelector('.todo-remove').addEventListener('click', () => {
            toDoData.splice(index, 1)
            render()
        })
    })
}

todoControl.addEventListener('submit', (e) => {
    e.preventDefault()

    const newToDo = {
        text: headerInput.value.trim().replace(/(  )+/g, " "),
        completed: false
    }

    if (newToDo.text) {
        toDoData.push(newToDo)
        headerInput.value = ''

        render()
    }
})

const toDoData = storage.get()
render()


