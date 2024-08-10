const cake = document.querySelector('.cake');
let isDragging = false;
let previousX, previousY, currentX = 0, currentY = 0;

cake.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousX = e.clientX;
    previousY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - previousX;
        const deltaY = e.clientY - previousY;
        currentX += deltaX * 0.5;
        currentY -= deltaY * 0.5;
        cake.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
        previousX = e.clientX;
        previousY = e.clientY;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});
