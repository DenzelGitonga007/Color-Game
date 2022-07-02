let diffEls = document.querySelectorAll(".diff__btn");
// diffEls becomes an array
let diffEl = document.querySelector(".diff__btn.active").innerHTML;
//Holds the content of the active btn
let n = diffEl;
//Represents the number on the btn
let colorsEl = document.querySelector(".colors");
let colorsBlocks;
let rgbEl = document.querySelector(".rgb");
let resetBtn = document.querySelector(".reset");
let header = document.querySelector(".header");
let statusEl = document.querySelector(".status");
// The status p-tag.
let colors = [];
let pickedColor;

createBlocks(n);
resetGame();

function checkColors() {
  // your code here
  for (let i = 0; i < colorsBlocks.length; i++) {
    // The event listener for the checkColors
    colorsBlocks[i].addEventListener('click', ()=>{
    if(colorsBlocks[i].style.backgroundColor === colors[pickedColor]) {
      statusEl.textContent = "Correct! That is the color!"
      resetBtn.textContent = "New game?";
      // Call a function to change the colors to the picked one.
      changeColors();
      // To have the header bg color change to the right color
      header.style.backgroundColor = colors[pickedColor]
      statusEl.style.backgroundColor = colors[pickedColor]
    } else {
      colorsBlocks[i].style.backgroundColor = 'white'
      }
    })
  }
}

function resetGame() {
  // Set the header and status bg color to white
  statusEl.style.backgroundColor = "white"
  header.style.backgroundColor = "white"
  createBlocks(n);
  document.body.style.color = "black";
  colors = [];

  pickColors();
  pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  
  setColors();
  statusEl.innerHTML =
    "Try to guess the right color based on the RGB value by clicking on the blocks.";
  // Call the setNumberOfTiles() 
  setNumberOfTiles()
   
}

function setColors() {
  for (let i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (let i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}

function setNumberOfTiles() {
  // your code here
  // This displays the blocks based on the number clicked((
  for(let i = 0; i <= n; i++) {
    diffEls[i].addEventListener('click', ()=> {
      // To remove the "active from either of the two btns"
      diffEls[0].classList.remove("active");
      diffEls[1].classList.remove("active");
      // Whichever btn is clicked becomes the active one
      diffEls[i].classList.add("active");
      diffEls[i].innerHTML === '6'? n = 6 : n = 9;
      // Call the resetGame
      resetGame()
    })
  }

}

function createBlocks(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
  for (let i = 0; i < num; i++) {
    let block = document.createElement("div");
    block.classList.add("colors__block");
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  for (let i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener("click", checkColors);
  }
}

// To change the colors upon correct selection
function changeColors() {
  for (let i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[pickedColor]
  }
}
