var myGamePiece;
var myObstacles = [];
var bullets = [];

function startGame() {

    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120, "player");
    myObstacle = new component(30, 30, "green", 300, 200, "zombie");
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
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

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.moveAngle = 0;
    this.speed = 0;  
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();
    }
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);     
    }
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

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function updateGameArea() {
    var x, y;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
          myGameArea.stop();
          return;
        }
    }
    for (i = 0; i < bullets.length; i += 1) {
        for(x = 0; x < myObstacles.length; x +=1){
            if (bullets[i].crashWith(myObstacles[x])) {
                myObstacles[x].color = "white";
                myObstacles.splice(x,1);
            }         
        }
    }
    myGameArea.clear(); 
    myGameArea.frameNo += 1;

    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        y = myGameArea.canvas.height - 200
        myObstacles.push(new component(30, 30, "green", x, y));
      }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
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
}

function shoot(){
    var x = myGamePiece.x;
    var y = myGamePiece.y;
    var newBullet = new component(10,10, "purple", x, y, "bullet");
    newBullet.speed = -4;
    newBullet.angle = myGamePiece.angle;
    bullets.push(newBullet);
    bullets.update();
}