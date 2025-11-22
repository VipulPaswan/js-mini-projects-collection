let targetColor = "";
let score = 0;
let time = 30;
let timer;
let colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "hotpink",
  "orange",
  "grey",
  "maroon",
  "black",
  "white",
  "indigo",
  "purple",
  "brown",
  "lightgreen",
  "navy",
  "pink",
];
const grid = document.getElementById("grid");
const targetColorDisply = document.getElementById("target-color");
const scoreDisply = document.getElementById("score");
const timeDisply = document.getElementById("time");
// function getRandomeColor(){

// }
function shuffleArray() {
  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }

  return colors;
}

function createGrid() {
  grid.innerHTML = "";
  colors = shuffleArray(colors);
  console.log(colors);
  targetColor = colors[Math.floor(Math.random() * 16)];
  targetColorDisply.textContent = targetColor;
  colors.forEach((color) => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.addEventListener("click", () => {
      handleClick(color);
    });
    grid.appendChild(box);
  });
}

function handleClick(clickedColor) {
  if (clickedColor === targetColor) {
    score++;
    scoreDisply.textContent = score;
    createGrid();
  }
}

function startGame() {
  score = 0;
  time = 30;
  scoreDisply.textContent = score;
  timeDisply.textContent = time;
  createGrid();
  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    timeDisply.textContent = time;
    if (time === 0) {
      clearInterval(timer);
      alert("⌛Time over Your final score:" + score);
    }
  }, 1000);
}

let darkButton = document.getElementById("dark");
let lightButton = document.getElementById("light");

lightButton.addEventListener("click", lightmode);
darkButton.addEventListener("click", darkmode);

function lightmode() {
  document.body.style.backgroundColor = "aquamarine";
  let gc = document.querySelector(".game-container");
  gc.style.backgroundColor = "white";
  gc.style.color = "black";
  document.getElementById("mode").style.boxShadow = "5px 5px 5px 5px black";
}

function darkmode() {
  document.body.style.backgroundColor = "grey";
  let gc = document.querySelector(".game-container");
  gc.style.backgroundColor = "pink";
  gc.style.color = "white";
  document.getElementById("mode").style.boxShadow = "5px 5px 5px 5px white";
}
