
const inputBtn = document.getElementById("input-btn")
let myLeads = []
// const make sure that the developer can know which variable can be reassigned
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
   // console.log("button clicked from addEventlistener")
   // const input = inputEl
   myLeads.push(inputEl.value)

})

for(let i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}