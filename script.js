document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      const message = card.querySelector('.hidden');
      if (message) {
        message.classList.toggle('hidden');
      }
    });
  });
  
// Play music
const music = document.getElementById('birthdayMusic');
music.volume = 0.5;
// Surprise Button
const surpriseButton = document.getElementById('surpriseButton');
const surpriseSection = document.querySelector('.surprise-section');
const fireworks = document.querySelector('.fireworks');
surpriseButton.addEventListener('click', () => {
    // Show Surprise
    surpriseSection.style.display = 'block';
    fireworks.style.display = 'block';
    
    // Stop music if needed
    if (music.paused) {
        music.play();
    }
});