const hero = document.querySelector('.hero');
document.addEventListener('mousemove', (e) => {
    let x = (e.clientX / window.innerWidth) * 100;
    let y = (e.clientY / window.innerHeight) * 100;
    hero.style.backgroundPosition = `${x}% ${y}%`;
});
