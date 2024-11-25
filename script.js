document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      const message = card.querySelector('.hidden');
      if (message) {
        message.classList.toggle('hidden');
      }
    });
  });
  