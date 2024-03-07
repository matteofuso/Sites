function scroll_perc() {
    page = document.documentElement
    scroll_pos = page.scrollTop
    scroll_limit = page.scrollHeight /*Altezza totale della pagina*/ - page.clientHeight /*Altezza schermo*/
    perc = Math.round(scroll_pos/scroll_limit*100)
    return perc
}

window.onload = function() {
    bar = document.getElementById("readingbar")
    header = document.getElementById("head")
    document.body.onscroll = function() {
        perc = scroll_perc() + "%"
        if (perc == "0%") {
            bar.style.height = "0"
        } else {
            bar.style.width = perc
            bar.style.height = "23px"
        }
    }
    header = document.getElementById("head")
    body = document.getElementById("body")
    body.onclick = function() {
        if(header.classList.contains("open")){
            header.classList.remove("open")
        }
    }
}