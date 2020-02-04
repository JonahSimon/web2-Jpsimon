let catX = 0;
let caty = 0;

function seeCat() {
    let cat = document.getElementById("cat")
    cat.style= "display: block"
}

function hideCat() {
    let cat = document.getElementById("cat")
    cat.style= "display: none"
}

function moveCat() {
    let cat = document.getElementById("cat")
    catX = Math.random()*400;
    catY = Math.random()*400;
    cat.style = "left: " + catX + "px; top: " + catY + "px;"
}

function changeParagraph() {
    let para = document.getElementById("test")
    para.textContent = "Now I have changed this text"
}

function 

hideCat()
setTimeout(seeCat, 5000)
setTimeout(changeParagraph, 10000)
setInterval(() => {moveCat() }, 1000)