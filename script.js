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
    
    // Play music if paused
    if (music.paused) {
        music.play()
            .then(() => {
                console.log('Musik berhasil diputar');
            })
            .catch((error) => {
                console.error('Gagal memutar musik:', error);
                alert('Klik tombol lagi jika musik tidak berputar!');
            });
    }
});

// Tombol Mulai untuk memutar musik dan efek hati
document.getElementById('mulai-btn').addEventListener('click', function() {
  const audio = document.getElementById('birthdayMusic');
  audio.play()
    .then(() => {
      console.log('Musik berhasil diputar');
    })
    .catch((error) => {
      console.error('Gagal memutar musik:', error);
      alert('Klik tombol lagi jika musik tidak berputar!');
    });

  // Tambahkan elemen hati
  const heart = document.createElement('div');
  heart.classList.add('heart');
  document.body.appendChild(heart);

  // Animasi hati
  setTimeout(() => {
    heart.style.animation = 'heart-beat 1s ease-in-out infinite';
  }, 100);

  // Hapus elemen hati setelah animasi selesai
  setTimeout(() => {
    heart.remove();
  }, 2000);
});

// Kartu Tarot
const cards = document.querySelectorAll('.tarot-card');
const messages = [
  "Semangat dan jangan pernah menyerah!",
  "Cinta akan datang di waktu yang tepat!",
  "Kesuksesan menantimu, tetap berusaha!",
  "Aku masih menyayangimu, maukah kita mencoba lagi?",
  "Mungkin ini saatnya kita kembali menjadi kita.",
  "Hatiku selalu untukmu, balikan yuk?"
];

// Tambahkan pesan ke kartu
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    card.innerHTML = `<h3 class="text-2xl font-bold text-white">${messages[index]}</h3>`;
    gsap.from(card, { duration: 1, scale: 0, ease: 'bounce' });
  });
});
