// GSAP Animations for Parallax Effect
gsap.from(".hero-section h1", { duration: 2, opacity: 0, y: -50 });
gsap.from(".hero-section h2", { duration: 2, opacity: 0, y: 50 });
gsap.from(".hero-section p", { duration: 2, opacity: 0, y: 50, delay: 1 });

// Parallax Scroll Effect
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let parallaxSpeed = scrollPosition * 0.5;

    document.querySelector('.hero-section').style.backgroundPosition = `center ${parallaxSpeed}px`;
});

// Adding Hover Effect for Tarot Cards
document.querySelectorAll('.tarot-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Smooth Scroll to Sections
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
