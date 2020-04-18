var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var myGamePiece = new component(30, 30, "red", 100, 120);
var isMoving;

// class to add shapes in specific places to the canvas
class component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;


        this.update = function() {
            c.fillStyle = color;
            c.fillRect(this.x, this.y, this.width, this.height);
        }
        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;
        }  
    }
}

function updateGameArea() {
    myGamePiece.newPos();
    myGamePiece.update();
  }

  
// Functions surronding moving //  
function moveup() {
    myGamePiece.speedY -= 1;
}
  
function movedown() {
    myGamePiece.speedY += 1;
}
  
function moveleft() {
    myGamePiece.speedX -= 1;
}
  
function moveright() {
    myGamePiece.speedX += 1;
}



function keyDownHandler(event)
{
	var keyPressed = String.fromCharCode(event.keyCode);

	if (keyPressed == "W")
	{	
        moveup();	
		isMoving = true;
	}
	else if (keyPressed == "D")
	{	
        moveright();
		isMoving = true;		
	}
	else if (keyPressed == "S")
	{	
        movedown();
		isMoving = true;		
	}
	else if (keyPressed == "A")
	{	
        moveleft();
		isMoving = true;		
	}
}

function keyUpHandler(event)
{
	var keyPressed = String.fromCharCode(event.keyCode);
	
	if ((keyPressed == "W") || (keyPressed == "A") || 
		(keyPressed == "S") || (keyPressed == "D"))
	{
		isMoving = false;
	}
}