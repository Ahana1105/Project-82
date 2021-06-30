var mouse_event = "";
var last_x,last_y;
var color = "black";
var line_width = 3;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
mouse_event = "mousedown";
color = document.getElementById("color").value;
line_width = document.getElementById("line_width").value;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(current_x,current_y,20,0,2*Math.PI);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}

function clear_Area() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}