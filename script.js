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
  document.addEventListener("DOMContentLoaded", () => {
    const puzzleContainer = document.getElementById("puzzle-container");
    const message = document.getElementById("puzzle-message");
    const tiles = [...Array(16).keys()]; // Tiles: 0 to 15
    tiles[15] = null; // Last tile is empty
    let shuffled = [];
  
    // Shuffle tiles
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    function renderTiles() {
      puzzleContainer.innerHTML = "";
      shuffled.forEach((tile, index) => {
        const div = document.createElement("div");
        div.className = "puzzle-tile";
        if (tile === null) {
          div.classList.add("empty");
        } else {
          div.textContent = tile + 1;
        }
        div.addEventListener("click", () => moveTile(index));
        puzzleContainer.appendChild(div);
      });
    }
  
    function moveTile(index) {
      const emptyIndex = shuffled.indexOf(null);
      const isAdjacent =
        [index - 1, index + 1, index - 4, index + 4].includes(emptyIndex) &&
        !(index % 4 === 0 && emptyIndex === index - 1) && // Prevent wraparound
        !(emptyIndex % 4 === 0 && index === emptyIndex - 1);
  
      if (isAdjacent) {
        [shuffled[index], shuffled[emptyIndex]] = [shuffled[emptyIndex], shuffled[index]];
        renderTiles();
        checkWin();
      }
    }
  
    function checkWin() {
      if (shuffled.every((tile, i) => tile === (i < 15 ? i : null))) {
        message.classList.remove("hidden");
      }
    }
  
    function startGame() {
      shuffled = shuffle([...tiles]);
      renderTiles();
    }
  
    startGame();
  });
  
});