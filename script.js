document.addEventListener('mousemove', (e) => {
    let x = (e.clientX / window.innerWidth) * 100;
    let y = (e.clientY / window.innerHeight) * 100;
    document.querySelector('.hero').style.backgroundPosition = `${x}% ${y}%`;
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('.hero');

    if (scrollPosition > 50) {
        heroSection.style.backgroundColor = '#ff6f00';
    } else {
        heroSection.style.backgroundColor = '#ff5722';
    }
});

// Tarot card random message generator
const tarotCards = document.querySelectorAll('.card');
const tarotMessages = [
    'Keberuntungan ada di tanganmu!',
    'Jaga kesehatanmu, itu yang paling penting.',
    'Cinta akan datang dengan cara yang tak terduga.',
    'Kariermu akan bersinar terang.',
    'Kedamaian batin akan membawa kebahagiaan.',
    'Keberanianmu akan mengubah segalanya.',
    'Kesuksesan sedang menantimu di setiap langkah.'
];

tarotCards.forEach((card, index) => {
    card.textContent = tarotMessages[index];
});
