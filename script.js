// Animasi Hero Section
gsap.from(".hero h1", { duration: 2, opacity: 0, y: -50 });
gsap.from(".hero h2", { duration: 2, opacity: 0, y: 50 });
gsap.from(".hero p", { duration: 2, opacity: 0, y: 50, delay: 1 });

// Parallax Scroll Effect
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let parallaxSpeed = scrollPosition * 0.5;
    document.querySelector('#hero').style.backgroundPosition = `center ${parallaxSpeed}px`;
});

// Interaksi Kartu Tarot
document.querySelectorAll('.tarot-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
