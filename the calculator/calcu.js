let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = 0
let sumEl = document.getElementById("sum-el")

function Add(){
    sum = num1 + num2
    sumEl.textContent = sum
}

function Subtract(){
    sum = num1 - num2
    sumEl.textContent = sum
}

function Multiply(){
    sum = num1 * num2
    sumEl.textContent = sum
}

function Divide(){
    sum = num1 / num2
    sumEl.textContent = sum
}