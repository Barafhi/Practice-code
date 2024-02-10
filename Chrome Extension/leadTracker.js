
function save(){
    console.log("Button clicked!")
}

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("button clicked from addEventlistener")
})