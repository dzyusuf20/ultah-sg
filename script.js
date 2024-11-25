document.getElementById('start-btn').addEventListener('click', () => {
    const music = document.getElementById('birthday-music');
    music.play();
    gsap.fromTo(
      "header h1",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
  });
  
  const tarotCards = document.querySelectorAll('.tarot-card');
  const messages = [
    "Semangat dan jangan pernah menyerah!",
    "Cinta akan datang di waktu yang tepat!",
    "Kesuksesan menantimu, tetap berusaha!"
  ];
  
  tarotCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      gsap.to(card, { scale: 1.1, duration: 0.5, yoyo: true });
      card.innerHTML = `<h3>${messages[index]}</h3>`;
    });
  });
  