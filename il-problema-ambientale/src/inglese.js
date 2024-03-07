const language = document.getElementById("language")
language.addEventListener("change", function(){
    lan = language.value
    if(lan == "eng"){
        window.location = "inglese.html"
    }
    if(lan == "ita"){
        window.location = "inglese_ita.html"
    }
})

const alert = document.getElementById("sensibile-alert")
const blur = document.getElementById("sensibile-blur")
const button = document.getElementById("sensibile-button")

button.addEventListener("click", function(){
    alert.style.display = "none"
    blur.classList.remove("blur-max")
})