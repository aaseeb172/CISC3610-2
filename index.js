// creates our variables
var canvas = undefined;
var ct = undefined;
var linkText="https://github.com/aaseeb172/";
var linkX=10;
var linkY=300;
var linkHeight=10;
var linkWidth;
var inLink = false;

//we initialize our variables through this function calling the canvas we created and giving it a context
function set() { 
    canvas=document.getElementById('myCanvas');
    ct=canvas.getContext('2d');
    // this is what creates our sky our background on top
    ct.fillStyle= "#00FFFF";
    ct.fillRect(0,0,599,499);
    ct.fillStyle= "#5C4033";
    // this is what creates our dirt bottom or ground base and color
    ct.fillRect(0,500,600,600);
    ct.fillStyle="#00FFFF";
    //this path below is what creates our sun along with its color we use arc() and stroke()
    ct.beginPath()
    ct.arc(50,50,40,0,2*Math.PI);
    ct.fillStyle="yellow";
    ct.stroke();
    ct.fill();
    // this below is our house that is created through the fillRect()
    ct.fillStyle="#FFE5B4";
    ct.fillRect(100,410,100,90);
    drawlink();
    drawtriangle();
    drawwindow();
    drawdoor();
    text();
    drawtrees();
    drawstump();

}

document.addEventListener('DOMContentLoaded', set);

function drawtriangle() {
    // this is used to draw our roof of the house 
    ct.beginPath();
    ct.moveTo(100, 411);
    ct.lineTo(200, 411);
    ct.lineTo(145, 350);
    ct.fillStyle="red";
    ct.fill();
    ct.closePath();
    ct.stroke();
}
 
function drawwindow() {
    // we use this function to draw the window of the house through the moveTo and lineTo functions
    ct.beginPath();
    ct.strokeRect(112,445,25,16);
    ct.moveTo(124,445);
    ct.lineTo(124,460);
    ct.stroke();
    ct.closePath();
    ct.beginPath();
    ct.moveTo(112,453);
    ct.lineTo(138,453);
    ct.stroke();
}

function drawdoor() {
    // this function is used to create our door for the living quarters along with the doorknob
    ct.beginPath();
    ct.moveTo(150,450);
    ct.strokeRect(155,445,30,55);
    ct.closePath();
    ct.beginPath();
    ct.arc(177,477,3,0,2*Math.PI);
    ct.stroke();

}
function text() {
    // this function adds our caption to our canvas
    ct.beginPath();
    ct.fillStyle="black";
    ct.fillText("This Is My First Portrait", 400,40);
    ct.closePath();
}
// this function i created on my own as as its name it creates the trees
function drawtrees() {
    // this first path creates our green triangle for our first tree
    ct.beginPath();
    ct.moveTo(290, 461);
    ct.lineTo(342, 390);
    ct.lineTo(405, 461);
    ct.fillStyle="green";
    ct.fill();
    ct.closePath();
    // this path is what creates the our stump or bark under the tree
    ct.beginPath();
    ct.fillStyle="#6F4E37";
    ct.fillRect(335,460,25,40);
    ct.closePath();
    // this creatss our second green triangle for our second tree
    ct.beginPath();
    ct.moveTo(459, 460);
    ct.lineTo(515, 394);
    ct.lineTo(570, 460);
    ct.fillStyle="green";
    ct.fill();
    ct.stroke();
    ct.closePath();
    // this creates the last stump or bark for our second tree
    ct.fillStyle="#6F4E37";
    ct.fillRect(500,460,25,40);
    

}
//this function i used google to research about and found a solution on how to draw the link on the canvas
// along with getting the percise position to see if it was clicked on or not
function drawlink() {
    ct.font='10px sans-serif';
    ct.fillStyle = "black";
    ct.fillText(linkText,linkX,linkY);
    linkWidth=ct.measureText(linkText).width;
    canvas.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", on_click, false);
}
function on_mousemove (ev) {
    var x, y;
  
    // this i got from google and stack overflow and put together some code that it allows us to find the
    // position of our mouse relative to the canvas
    if (ev.layerX || ev.layerX == 0) { 
      x = ev.layerX;
      y = ev.layerY;
    }
    x-=canvas.offsetLeft;
    y-=canvas.offsetTop;
    
    // this checks if the mouse is over the text link or not if it is then inLink is set to true
    if(x>=linkX && x <= (linkX + linkWidth) && y<=linkY && y>= (linkY-linkHeight)){
        document.body.style.cursor = "pointer";
        inLink=true;
    }
    else{
        document.body.style.cursor = "";
        inLink=false;
    }
  }
  
  // this i also researched about and found online which allows us 
  function on_click(e) {
    if (inLink)  {
      window.location = linkText;
    }
  }
