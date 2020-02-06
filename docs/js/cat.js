class Cat {
    constructor(ID,originX,originY,width,height){
        this.ID = ID;
        this.originX = originX;
        this.originY = originY;
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = 0;
        this.score = 0;
        let me = this;
        setInterval(() => {me.move(); me.updateScore()}, 1000)
        let cat = document.getElementById(this.ID);
        cat.addEventListener("click", () => { me.click(); })
    }

    click() {
        this.score = this.score + 1;
    }

    move() {
        let cat = document.getElementById(this.ID);
        this.x = this.originX + Math.random()*this.width;
        this.y = this.originY + Math.random()*this.height;
        let newStyle = "left: " + this.x + "px; top: " + this.y + "px;";
        cat.style = newStyle;
        this.score = this.score - 1;
    }

    updateScore() {
        let score = document.getElementById(this.ID + "-score");
        score.innerHTML = this.score;
    }

}

let meowmeow = new Cat("meowmeow", 0,10,100,100);
let fluffy = new Cat("fluffy", 400 ,0, 100,100);


function changeParagraph() {
    let para = document.getElementById("test")
    para.textContent = "Now I have changed this text"
}

setTimeout(() => {changeParagraph() }, 5000)