// Урок 10 Работа с DOM
"use strict"

const books = document.querySelector('.books')
let bookList, node

const sortChilds = (nodes, blockName = el => el.innerText) => {
    const childs = [...nodes].map(child => (
        {
            id: (blockName(child).match(/[0-9A-Z]/) || [" "])[0].charCodeAt(0),
            child
        }
    ))
    childs.sort((a, b) => (a.id - b.id))
    return childs.map(child => child.child)
}

bookList = sortChilds(books.querySelectorAll('.book'), el => el.querySelector('a').innerText)
books.append(...bookList)

document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.7)), url(./image/you-dont-know-js.jpg)"

node = bookList[2].querySelector("a")
node.innerText = node.innerText.replace('Пропопипы', 'Прототипы')

document.querySelector(".adv").remove()

bookList[1].querySelector('ul').append(...sortChilds(bookList[1].querySelectorAll('li')))
bookList[4].querySelector('ul').append(...sortChilds(bookList[4].querySelectorAll('li')))

bookList[5].querySelector('ul').lastElementChild.insertAdjacentHTML('beforebegin', '<li>Глава 8: За пределами ES6</li>')


