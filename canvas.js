// Get the canvas element and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw a line
ctx.beginPath();
ctx.moveTo(50, 50); // Starting point of the line
ctx.lineTo(200, 50); // Ending point of the line
ctx.strokeStyle = 'blue'; // Color of the line
ctx.lineWidth = 2; // Line thickness
ctx.stroke(); // Actually draw the line

// Draw a rectangle
ctx.beginPath();
ctx.rect(100, 100, 150, 100); // x, y, width, height
ctx.fillStyle = 'green'; // Fill color
ctx.fill(); // Fill the rectangle
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke(); // Outline of the rectangle

// Draw a circle
ctx.beginPath();
ctx.arc(300, 300, 50, 0, Math.PI * 2); // x, y, radius, start angle, end angle
ctx.fillStyle = 'red'; // Fill color
ctx.fill(); // Fill the circle
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke(); // Outline of the circle
