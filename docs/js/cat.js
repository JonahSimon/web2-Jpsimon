let catX = 0;
let catY = 0;
let catScore = 0;


function seeCat() {
    let cat = document.getElementById("cat")
    cat.style= "display: block"
}

function hideCat() {
    let cat = document.getElementById("cat")
    cat.style= "display: none"
}

function clickCat(){
    catScore = catScore + 1;
}

function moveCat() {
    let cat = document.getElementById("cat")
    catX = 200;
    catY = 200;
    let newStyle = "left: " + catX + "px; top: " + catY + "px;"
    cat.style = newstyle;
    catScore = catScore -1;
}

function updateScore(){
    let score = document.getElementById("score");
    score.innerHTML = catScore;
}

function changeParagraph() {
    let para = document.getElementById("test")
    para.textContent = "Now I have changed this text"
}

setTimeout(() => {changeParagraph() }, 5000)
setInterval(() => { moveCat(); updateScore() }, 1000)