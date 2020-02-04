function seeCat() {
    let cat = document.getElementById("cat")
    cat.style= "display: block"
}

function hideCat() {
    let cat = document.getElementById("cat")
    cat.style= "display: none"
}

function changeParagraph() {
    let para = document.getElementById("test")
    para.textContent = "Now I have changed this text"
}

hideCat()
setTimeout(seeCat, 5000)
setTimeout(changeParagraph, 10000)