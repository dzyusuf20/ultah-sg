document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const audio = document.getElementById("audio");
  const tarotSection = document.getElementById("tarot");
  const number = document.getElementById("number");

  // GSAP Animation for number
  gsap.fromTo(number, { scale: 0 }, { scale: 1, duration: 2, ease: "elastic.out(1, 0.3)" });

  // Play music on button click
  startBtn.addEventListener("click", () => {
    audio.play();
    gsap.to(startBtn, { opacity: 0, duration: 0.5 });
  });

  // Add tarot cards
  const messages = [
    "Semoga bahagia selalu!",
    "Tetap sukses!",
    "Semoga mimpi-mimpi indahmu terwujud.",
    "Kita pernah punya cerita indah!",
    "Kau selalu istimewa."
  ];

  messages.forEach((message, i) => {
    const card = document.createElement("div");
    card.className =
      "bg-white text-black text-center rounded-xl shadow-lg p-5 cursor-pointer transform hover:scale-105";
    card.textContent = `Kartu ${i + 1}`;
    card.addEventListener("click", () => {
      card.innerHTML = `<p>${message}</p>`;
      gsap.fromTo(card, { rotateY: 0 }, { rotateY: 360, duration: 1 });
    });
    tarotSection.appendChild(card);
  });
});
document.addEventListener('DOMContentLoaded', () => {
    const puzzlePieces = document.querySelectorAll('.puzzle-piece');
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const puzzlePosition = document.getElementById('name-puzzle').offsetTop;
  
      // Ketika puzzle mencapai area layar
      if (scrollPosition > puzzlePosition + 100) {
        puzzlePieces.forEach((piece, index) => {
          setTimeout(() => {
            piece.classList.add('show');
          }, index * 150); // Delay per piece untuk animasi
        });
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  });
  