window.onload = function() {
    // Tutte le funzioni che esegue quando la pagina è caricata
    header = document.getElementById("head")
    body = document.getElementById("body")
    body.onclick = function() {
        if(header.classList.contains("open")){
            header.classList.remove("open")
        }
    }

    question = document.getElementsByClassName("question")
    for(i = 0; i<question.length; i++){
        questionf(question[i])
    }
}

function questionf(el) {
    el.addEventListener("click", function(e){
        sel = e["path"][0]
        if (sel.tagName == "I") {
            sel = sel.parentElement
        }
        if (!sel.classList.contains("first") && !sel.classList.contains("second")) {
            num = sel.getAttribute("chose")
            parent = sel.parentElement
            correct = parent.getAttribute("correct")
            parent.children[0].classList.add("first")
            parent.children[1].classList.add("second")
            if (num == correct) {
                sel.classList.add("correct")
            } else {
                sel.classList.add("incorrect")
            }
        }
    })
}

function menu() {
    if(header.classList.contains("open")){
        header.classList.remove("open")
    } else {
        header.classList.add("open")
    }
}