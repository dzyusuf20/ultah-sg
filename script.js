document.getElementById('playMusic').addEventListener('click', function() {
    var music = document.getElementById('birthdaySong');
    music.play();
});

let cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = "rotateY(180deg)";
        let message = document.createElement('div');
        message.classList.add('cardMessage');
        message.innerHTML = "Selamat Ulang Tahun, semoga selalu bahagia!";
        card.appendChild(message);
    });
});
