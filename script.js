// Function to play Happy Birthday song when the button is clicked
function playBirthdaySong() {
    var audio = document.getElementById('birthdaySong');
    audio.play();
}

// Function to flip the card
function flipCard(cardNumber) {
    var card = document.getElementById('card' + cardNumber);
    card.classList.toggle('flipped');
}
