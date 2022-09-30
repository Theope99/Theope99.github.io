const canvas = document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const handleMouseMove = (event) => {
console.log(event.clientx)
}

canvas.addEventListener('mousemove',handleMouseMove);