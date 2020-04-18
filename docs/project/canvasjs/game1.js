var myGamePiece;

function startGame() {
    c.start();
    myGamePiece = new component(300, 300, "red", 100, 120);
}

var c = {
    canvas : document.querySelector('canvas'),
    start : function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);
      window.addEventListener('keydown', function (e) {
        c.key = e.keyCode;
      })
    
      window.addEventListener('keyup', function (e) {
        c.key = false;
      })
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

// class to add shapes in specific places to the canvas
function component(width, height, color, x, y) {
        this.c = c;
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.update = function() {
            ctx = c.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;
        }  
}

function updateGameArea() {
    c.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (c.key && c.key == 65) {myGamePiece.speedX = -1; } // move left
    if (c.key && c.key == 68) {myGamePiece.speedX = 1; } // move right
    if (c.key && c.key == 87) {myGamePiece.speedY = -1; } // move up
    if (c.key && c.key == 83) {myGamePiece.speedY = 1; } // move down
    myGamePiece.newPos();
    myGamePiece.update();
} 