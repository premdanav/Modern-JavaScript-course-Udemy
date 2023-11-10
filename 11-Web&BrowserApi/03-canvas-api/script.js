const canvas = document.getElementById('my-canvas')

const ctx = canvas.getContext('2d');

//draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);


//draw circle
ctx.fillStyle = 'red';
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

//draw lines
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(300, 300)
ctx.strokeStyle = "blue"
ctx.lineWidth = 2;
ctx.stroke();

//draw text
ctx.font = "48px Arial";
ctx.fillStyle = 'purple';
ctx.fillText("Hello World", 300, 100., 300)
ctx.strokeText("Hello World", 300, 150., 300)

//draw image
const img = document.querySelector('img')
img.style.display = 'none'

img.addEventListener('load', () => {
    ctx.drawImage(img, 250, 250, 100, 100)
})