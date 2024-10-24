// Урок 13 ToDo

"use strict";

const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value))
const getData = key => JSON.parse(localStorage.getItem(key)) || []


const render = () => {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''

    setData(keyData, toDoData)

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

    const text = headerInput.value.trim().replace(/(  )+/g, " ");
    headerInput.value = ''   // здесь, т.к. для строки из пробелов -> в начальное

    if (text) {
        toDoData.push({
            text: text,
            completed: false
        })

        render()
    }
})

const keyData = 'toDo'
const toDoData = getData(keyData)
render()


