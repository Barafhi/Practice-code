
const inputBtn = document.getElementById("input-btn")
let myLeads = []
// const make sure that the developer can know which variable can be reassigned
const inputEl = document.getElementById("input-el")

inputBtn.addEventListener("click", function(){
   // console.log("button clicked from addEventlistener")
   const input = inputEl
   myLeads.push(input)

})