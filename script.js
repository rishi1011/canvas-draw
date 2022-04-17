const canvas = document.getElementById('canvas');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const sizeText = document.querySelector('.size');
const colorPicker = document.getElementById('color');
const clear = document.querySelector('.clear');

const ctx = canvas.getContext('2d');

let size = 10;
let color = '#085f63';

let x;
let y;

let isPressed = false;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x2, y2, x, y);

        x = x2;
        y = y2;
    }
});

canvas.addEventListener('mouseleave', () => {
    isPressed = false;
});

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = size * 2;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function drawCircle(x1, y1) {
    ctx.beginPath();
    ctx.arc(x1, y1, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function updateSizeText() {
    sizeText.innerText = size;
}

plusBtn.addEventListener('click', () => {
    if (size < 50) {
        size += 5;
    }

    updateSizeText();
});

minusBtn.addEventListener('click', () => {
    if (size > 5) {
        size -= 5;
    }
    updateSizeText();
});

colorPicker.addEventListener('change', (e) => color = e.target.value);

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})


