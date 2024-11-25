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

// Tombol Mulai untuk memutar musik dan efek emot love
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

  // Menambahkan banyak emotikon love ke halaman
  for (let i = 0; i < 30; i++) { // Menambahkan 30 emotikon love
    const love = document.createElement('div');
    love.classList.add('love');
    love.innerText = '💖';
    document.body.appendChild(love);

    // Animasi untuk setiap love
    const randomX = Math.random() * window.innerWidth; // Posisi horizontal acak
    const randomY = Math.random() * window.innerHeight; // Posisi vertikal acak
    const size = Math.random() * 20 + 10; // Ukuran acak dari 10px sampai 30px
    love.style.left = `${randomX}px`;
    love.style.top = `${randomY}px`;
    love.style.fontSize = `${size}px`;

    // Animasi pergerakan ke atas dan menghilang
    setTimeout(() => {
      love.style.animation = 'love-animation 2s forwards';
    }, 100);
    
    // Hapus emot love setelah animasi selesai
    setTimeout(() => {
      love.remove();
    }, 2500);
  }
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
