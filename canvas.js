
function drawBorder(){
   var canvas = document.getElementById("canvas");
   var context = canvas.getContext('2d');
   var size = { x: canvas.width, y: canvas.height };
   context.strokeRect(0,0, size.x, size.y);
}

drawBorder();


function redRectangle(){
   var canvas = document.getElementById("canvas");
   var context = canvas.getContext('2d');
   var size = {x: canvas.width, y: canvas.height};
   context.fillStyle='red';
   context.fillRect(size.x/2, size.y/2,size.x, size.y);
}


function blueRectangle(){
   var canvas = document.getElementById("canvas");
   var context = canvas.getContext('2d');
   var size = {x:canvas.width, y:canvas.height};
   context.fillStyle='blue';
   context.fillRect(0,0, size.x/2, size.y/2);
}


function redButton(){
   var canvas = document.getElementById("canvas");
   var context = canvas.getContext('2d');
   var size = {x:canvas.width, y:canvas.height};
   context.fillStyle='red';
   context.fillRect(Math.floor(Math.random()*100), Math.floor(Math.random()*100),
                Math.floor(Math.random()*200), Math.floor(Math.random()*200));


}

function greenButton(){
   var canvas = document.getElementById("canvas");
   var context = canvas.getContext('2d');
   var size = {x:canvas.width, y:canvas.height};
   context.fillStyle='green';
   context.fillRect(Math.floor(Math.random()*100), Math.floor(Math.random()*100),
                Math.floor(Math.random()*200), Math.floor(Math.random()*200));
}

function blueButton(){
   var canvas = document.getElementById("canvas");
   var context = canvas.getContext('2d');
   var size = {x:canvas.width, y:canvas.height};
   context.fillStyle='blue';
   context.fillRect(Math.floor(Math.random()*100), Math.floor(Math.random()*100),
                Math.floor(Math.random()*200), Math.floor(Math.random()*200));

}

function orangeButton(){
   var canvas = document.getElementById("canvas");
   var context = canvas.getContext('2d');
   var size = {x:canvas.width, y:canvas.height};
   context.fillStyle='orange';
   context.fillRect(Math.floor(Math.random()*100), Math.floor(Math.random()*100),
                Math.floor(Math.random()*200), Math.floor(Math.random()*200));

}

function clearCanvas(){
   var canvas = document.getElementById("canvas");
   var context = canvas.getContext('2d');
   var size = {x:canvas.width, y:canvas.height};
   context.clearRect(0,0,canvas.width, canvas.height);
   context.strokeRect(0,0, size.x, size.y);

}
