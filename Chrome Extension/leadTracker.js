
const inputBtn = document.getElementById("input-btn")
let myLeads = []

//myJSON.parse(myLeads)
// const make sure that the developer can know which variable can be reassigned
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLeads", "www.theexample.com")
// console(localStorage.getItem("myLeads"))
// localStorage.clear()
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

function render(leads){
    let listItems = ""

    for(let i = 0; i < leads.length; i++){
        // listItems += "<li><a target='_blank' href ='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target="_blank" href ="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
            `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function (){
    localStroge.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
   // console.log("button clicked from addEventlistener")
   // const input = inputEl
   myLeads.push(inputEl.value)
   inputEl.value = ""

   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   render(myLeads)

})

