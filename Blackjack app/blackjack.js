let firstCard = 2
let secondCard = 11

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

function startGame(){
    renderGame()
}

function renderGame(){
    if (sum < 21){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "You've got BlackJack!"
        hasBlackJack = true
     
    }  
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    cardEl.textContent = "Card: "+ firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
}

function newCard(){
    message = "Drawing a new card from the deck"
    let newCard = 8
    sum += newCard
    renderGame()
}