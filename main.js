var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
color="black";
Width=2;
var lastx, lasty, currentx, currenty;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("width").value;
    wdith=document.getElementById("width").value;
}
    canvas.addEventListener("mouseleave", my_mousedown)
