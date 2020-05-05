var myGamePiece;
var myWalls = [];
var myObstacles = [];
var bullets = [];
var score = 0;
var fullscale = true;

// start game, draw players and walls. 
function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", myGameArea.canvas.width/2, myGameArea.canvas.height/2, "player");
    myWalls.push(new component( 20, window.innerHeight * 2, "green", 0, 0, "wall"));
    myWalls.push(new component( window.innerWidth * 2, 20, "green", 0, 0, "wall"));
    myWalls.push(new component( 20, window.innerHeight * 2, "green", window.innerWidth, 0, "wall"));
    myWalls.push(new component( window.innerWidth * 2, 20, "green", 0, window.innerHeight, "wall"));

}

// the play area
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        if (window.innerWidth < 800){
            fullscale  = false;
            this.canvas. width = window.innerWidth - 100;
            this.canvas.height = window.innerHeight - 140;
            myWalls.push(new component( 20, (window.innerHeight - 100) * 2, "green", 0, 0, "wall"));
            myWalls.push(new component( (window.innerWidth-100) * 2, 20, "green", 0, 0, "wall"));
            myWalls.push(new component( 20, (window.innerHeight-100) * 2, "green", (window.innerWidth-100), 0, "wall"));
            myWalls.push(new component( (window.innerWidth-100) * 2, 20, "green", 0, (window.innerHeight-100), "wall"));
        
        }
        else{
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        myWalls.push(new component( 20, window.innerHeight * 2, "green", 0, 0, "wall"));
        myWalls.push(new component( window.innerWidth * 2, 20, "green", 0, 0, "wall"));
        myWalls.push(new component( 20, window.innerHeight * 2, "green", window.innerWidth, 0, "wall"));
        myWalls.push(new component( window.innerWidth * 2, 20, "green", 0, window.innerHeight, "wall"));
    
        }
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;  
        this.interval = setInterval(updateGameArea, 10);
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })

    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

// the base function for all elements in the game.
function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.moveAngle = 0;
    this.speed = 0;  
    this.x = x;
    this.y = y;
    // saving and roating the shapes to be displayed on canvas again    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();
    }
    // updating position based on angles and speed
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);     
    }
    // collision detection function
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var hit = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          hit = false;
        }
        return hit;
      }
}

// interval function to decided when to spawn zomibes
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function updateGameArea() {
    var x, y;

    // checking if the player has crashed with a wall 
    for (i = 0; i < myWalls.length; i += 1) {
        if (myGamePiece.crashWith(myWalls[i])) {
          myGameArea.stop();
          return;
        }
    }

    // checking if player has collided with obstacles.
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
          myGameArea.stop();
          return;
        }
    }

    // loop to check for bullets hiting enemies
    for (i = 0; i < bullets.length; i += 1) {
        for(x = 0; x < myObstacles.length; x +=1){
            if (bullets[i].crashWith(myObstacles[x])) {
                score += 100;
                myObstacles[x].color = "white";
                myObstacles.splice(x,1);
            }         
        }
    }
    myGameArea.clear(); 
    myGameArea.frameNo += 1;

    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        // spawning emimes and randomly deciding what location on the edge they spawn.
        score += 10;
        var p = Math.floor(Math.random() * 100);
        if (p <= 25){
            var y = Math.floor(Math.random() * (window.innerHeight))
            myObstacles.push(new component(30, 30, "green", 0, y));
        }

        if (p > 25 && p <= 50){
            var y = Math.floor(Math.random() * (window.innerHeight))
            myObstacles.push(new component(30, 30, "green", (window.innerWidth), y));
        }

        if (p > 50 && p <= 75){
            var x = Math.floor(Math.random() * (window.innerWidth))
            myObstacles.push(new component(30, 30, "green", x, 0));
        }

        if (p > 75 && p <= 100){
            var x = Math.floor(Math.random() * (window.innerHeight * 2))
            myObstacles.push(new component(30, 30, "green", x,(window.innerHeight)));
        }
      }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].angle = angle360(myObstacles[i].x,myObstacles[i].y, myGamePiece.x, myGamePiece.y);
        myObstacles[i].speed = 2;
        myObstacles[i].newPos();
        myObstacles[i].update();
    }
    for (i = 0; i < myWalls.length; i +=1) {
        myWalls[i].update();
    }
    for (i = 0; i < bullets.length; i +=1) {
        bullets[i].newPos();
        bullets[i].update();
    }
    myGamePiece.moveAngle = 0;
    myGamePiece.speed = 0;
    if (myGameArea.keys && myGameArea.keys[32]) {shoot();} 
    if (myGameArea.keys && myGameArea.keys[65]) {myGamePiece.moveAngle = -3; }
    if (myGameArea.keys && myGameArea.keys[68]) {myGamePiece.moveAngle = 3; }
    if (myGameArea.keys && myGameArea.keys[87]) {myGamePiece.speed = -3; }
    if (myGameArea.keys && myGameArea.keys[83]) {myGamePiece.speed = 3; }
    myGamePiece.newPos();    
    myGamePiece.update();
    updateScore();
}


// angle functions to make the zombies chase the player
function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    return theta;
  }

function angle360(cx, cy, ex, ey) {
    var theta = angle(cx, cy, ex, ey); // range (-180, 180]
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
  }


//Controler as buttons
function moveup() {
    myGamePiece.speed = -3; 
}

function movedown() {
    myGamePiece.speed = 3; 
}

function moveleft() {
    myGamePiece.moveAngle = -3; 
}

function moveright() {
    myGamePiece.moveAngle = 3; 
}


// function to shoot from the player and kill zombies
function shoot(){
    var x = myGamePiece.x;
    var y = myGamePiece.y;
    var newBullet = new component(10,10, "purple", x, y, "bullet");
    newBullet.speed = -4;
    newBullet.angle = myGamePiece.angle;
    bullets.push(newBullet);
    bullets.update();
}

function updateScore(){
    console.log("plz");
    myGameArea.context.font = "30px Comic Sans MS";
    myGameArea.context.fillStyle = "red";
    myGameArea.context.textAlign = "center";
    if(fullscale){
        myGameArea.context.fillText(score, window.innerWidth/2, 40);
    }
    else{
        myGameArea.context.fillText(score, (window.innerWidth-100)/2, 40);
    }
}

document.getElementById("UP").onclick =  myGamePiece.speed = -3;
document.getElementById("DOWN").onclick = myGamePiece.speed = 3;
document.getElementById("SHOOT").onclick = shoot;
document.getElementById("LEFT").onclick = myGamePiece.moveAngle = -3;
document.getElementById("RIGHT").onclick = myGamePiece.moveAngle = 3;