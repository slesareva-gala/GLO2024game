// Урок 11 Обработка событий

"use strict";

const btn = document.getElementById("btn")
const elRange = document.getElementById("range")
const elRandeSpan = document.getElementById("range-span")
const elText = document.getElementById("text")
const elSquare = document.getElementById("square")
const elCircle = document.getElementById("circle")


btn.onclick = () => {
    elSquare.style.backgroundColor = elText.value.trim()
}

elRange.addEventListener("input", (e) => {
    const proc = e.target.value

    elRandeSpan.innerText = proc
    elCircle.style.width = `${proc}%`
    elCircle.style.height = `${proc}%`
})

document.getElementById("e_btn").style.display = "none"
elRange.value = 0
elCircle.style.width = "0%"
elCircle.style.height = "0%"

