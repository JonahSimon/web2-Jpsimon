var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillRect(300, 300, 100, 100);

// line 
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.strokeStyle = "blue";
c.stroke();

// // Arc / Circle
// c.beginPath();
// c.arc(300,300,30, 0, Math.PI * 2, false);
// c.strokeStyle = "red";
// c.stroke();

for(var i = 0; i < 200; i++){

    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    var color = getRandomColor();
    
    c.beginPath();
    c.arc(x,y,30, 0, Math.PI * 2, false);
    c.strokeStyle = color;
    c.stroke();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }