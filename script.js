const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div"); //create div
    div.classList.add("square"); //<div class="square">
    grid.appendChild(div); //add <div class="square"> to gridContainer
  }
};

updateGrid = () => {
  grid.innerHTML = ""; //<div class="gridContainer">""</div>
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 1fr)` //create ${userInput.value} number of columns at 1 fraction
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 1fr)` //create ${userInput.value} number of rows at 1 fraction
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }

};

const square = document.querySelector("div");
square.addEventListener("mouseover", changeColor)

function changeColor(event) {
    event.target.classList.replace("square", "color");
}

//allow grid to be updated on enter keypress
document.getElementById("quantity").onkeypress = function(event){
    if (event.keyCode == 13 || event.which == 13){
        updateGrid();
    }
};

//also allow grid to be update on pressing Reset button
resetButton.addEventListener("click", updateGrid);


createGrid();
