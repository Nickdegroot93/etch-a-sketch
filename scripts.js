const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-btn');
const clearButton = document.getElementById('clear-btn');
const rainbowButton = document.querySelector('#rainbow-btn');


rainbowButton.addEventListener('click', function() {
    rainbowButton.classList.toggle('active')});

resetButton.addEventListener('click', changeSize);
clearButton.addEventListener('click', clearColor);

// Create a grid of 16x16 upon loading the page
(function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
  }());

  
// Create a grid with a variable size
function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }

// Fill the grid with divs, append them to grid container.
function fillGrid(size) {
    for (let i = 0; i < size * size; i++){
        const gridElement = document.createElement("div");
        gridElement.classList = 'grid-element';
        gridContainer.appendChild(gridElement);
        gridElement.addEventListener('mouseover', changeColor);
    }
}

// Create either a random color or use black, depending on the active class of the raindbowButton.
function changeColor(e) {
    if (rainbowButton.classList.contains('active')) {
        let colorR = Math.floor(Math.random() * 256);
        let colorG = Math.floor(Math.random() * 256);
        let colorB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    }
    else {
        e.target.style.backgroundColor = `rgb(0, 0, 0)`;
    }
}

// Change the size of the grid according to input value.
function changeSize() {
    let newSize = prompt("Enter new size");

    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize <1 || newSize > 64 || Number.isNaN(newSize)) {
            alert("Please enter a number between 1 and 64");
            changeSize();
        }
        else {
        clearGrid();
        setGridSize(newSize);
        fillGrid(newSize);
        }
    }
}

// Clear color by clearing the grid and recreating a new same-sized grid.
function clearColor() {
    let elements = document.getElementsByClassName('grid-element');
    currentSize = Math.sqrt(elements.length);
    clearGrid();
    setGridSize(currentSize);
    fillGrid(currentSize);
}

// Remove all grid-elements
function clearGrid() {
    const element = document.getElementById('grid-container');
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

