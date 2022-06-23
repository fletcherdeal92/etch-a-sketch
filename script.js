// Etch-A-Sketch
// TODO: Create a webpage with a 16x16 grid of square divs.

let gridSize = 20;

const divContainer = document.getElementById("container");
const clearBtn = document.getElementById("clear");

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


// TODO: Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
divContainer.addEventListener('mouseover', function(e) {
    console.log(e);
    if (e.target.className == 'grid-item') {
        e.target.classList.add('black');
    }
})


// TODO: Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

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


// TODO: (Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

// Add button to clear field for testing without reloading

let gridItem = document.getElementsByClassName('grid-item');

clearBtn.addEventListener('click', function(e) {
    let blkDivs = document.querySelectorAll('.black');
    blkDivs.forEach( function(element){
        element.classList.remove('black');
    })
})