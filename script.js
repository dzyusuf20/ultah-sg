document.addEventListener('mousemove', (e) => {
    let x = (e.clientX / window.innerWidth) * 100;
    let y = (e.clientY / window.innerHeight) * 100;
    document.querySelector('.hero').style.backgroundPosition = `${x}% ${y}%`;
});
