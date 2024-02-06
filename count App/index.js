let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countSv = count + " - "
    saveEl.textContent += countSv
    countEl.textContent = 0
    count = 0
}

// let firstName = "me"
// let lastName = "them"
// let thirdName = firstName + " " + lastName 

// let name1 = "Linda"
// let greeting = "Hi there"
// function greetings(){
//     console.log(greeting + ", " + name1 + "!")
// }
// greetings()

// let myPoints = 3
// function add3Points(){
//     myPoints += 3
// }
// function remove1Point(){
//     myPoints -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// console.log(myPoints)