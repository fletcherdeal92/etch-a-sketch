// Etch-A-Sketch
// create a webpage with a grid of 16x16 when website loads

let gridSize = 20;
const defaultColor = '#ffffff'
let currentColor = '#000000'

const divContainer = document.getElementById("container");
const clearBtn = document.getElementById("clear");
const colorPicker = document.getElementById('colorPicker');

colorPicker.oninput = (e) => setCurrentColor(e.target.value);

function setCurrentColor(newColor) {
    currentColor = newColor
}

function makeRows(rows, cols) {
    divContainer.style.setProperty('--grid-rows', rows);
    divContainer.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        divContainer.appendChild(cell).className = 'grid-item';
    }
}
makeRows(gridSize, gridSize);

function removeAllChildNodes(divContainer) {
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    }
}

// testing mouseDown function

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


// Set a hover effect when divs are moused over
divContainer.addEventListener('mouseover', function(e) {
    if (mouseDown) {

            e.target.style.backgroundColor = currentColor;
            e.target.classList.add('filled');

    }
    
})


// add button that changes the grid size

const sizeBtn = document.getElementById("size");

sizeBtn.addEventListener('click', function(){
    let newSize = prompt('What size would you like?', '12')
    newSize = Number(newSize);
    console.log(newSize);
    if (newSize && newSize <= 99) {
        removeAllChildNodes(divContainer);
        makeRows(newSize, newSize);
    } 
})

// Add button to clear field for testing without reloading

let gridItem = document.getElementsByClassName('grid-item');

clearBtn.addEventListener('click', function(e) {
    let blkDivs = document.querySelectorAll('.filled');
    blkDivs.forEach( function(element){
        element.classList.remove('filled');
        element.style.backgroundColor = defaultColor;
    })
})

// TODO: (Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.