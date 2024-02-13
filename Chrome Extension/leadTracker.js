
const inputBtn = document.getElementById("input-btn")
let myLeads = []

//myJSON.parse(myLeads)
// const make sure that the developer can know which variable can be reassigned
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLeads", "www.theexample.com")
// console(localStorage.getItem("myLeads"))
// localStorage.clear()

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function(){
   // console.log("button clicked from addEventlistener")
   // const input = inputEl
   myLeads.push(inputEl.value)
   inputEl.value = ""

   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   renderLeads()

})

function renderLeads(){
    let listItems = ""

    for(let i = 0; i < myLeads.length; i++){
        // listItems += "<li><a target='_blank' href ='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target="_blank" href ="${myLeads[i]}">
                    ${myLeads[i]}
                </a>
            </li>
            `
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}
