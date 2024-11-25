document.addEventListener('DOMContentLoaded', () => {
    const playMusicButton = document.getElementById('play-music-btn');
    const audioElement = document.getElementById('birthday-audio');

    // Memastikan musik bisa diputar saat tombol diklik
    playMusicButton.addEventListener('click', () => {
        audioElement.play();
        playMusicButton.disabled = true; // Disable tombol setelah musik diputar
        playMusicButton.textContent = "Lagu Ulang Tahun Diputar!";
    });

    // Menambahkan event listener untuk animasi flip kartu
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.card-inner').classList.toggle('flip');
        });
    });
});
