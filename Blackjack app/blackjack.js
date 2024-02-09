
let card = []

let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    // if 1     -> return 1
    if (randomNumber === 1){
        return 11
    }
    //if 11-13  -> return 10
    else if (randomNumber >= 11){
        return 10
    }
    else{
        return randomNumber
    }
    // for(let i = 1; i <= 11; i++){
    //     return randomNumber
    // }    
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    card.push(firstCard)
    card.push(secondCard)
    sum = firstCard + secondCard
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
    cardEl.textContent = "Card: "
    for(let i = 0; i <  card.length; i++){
        cardEl.textContent += card[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
}

function newCard(){
    message = "Drawing a new card from the deck"
    let newCard = getRandomCard()
    sum += newCard
    // Push the card to the cards array
    card.push(newCard)
    renderGame()
}