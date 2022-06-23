// Etch-A-Sketch
// TODO: Create a webpage with a 16x16 grid of square divs.

let gridSize = 16;

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


// TODO: Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

let gridItem = document.getElementsByClassName('grid-item');

divContainer.addEventListener('mouseover', function(e) {
    console.log(e);
    if (e.target.className == 'grid-item') {
        e.target.classList.add('black');
    }
})


// TODO: Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

// TODO: (Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

// Add button to clear field for testing without reloading
clearBtn.addEventListener('click', function(e) {
    let blkDivs = document.querySelectorAll('.black');
    blkDivs.forEach( function(element){
        element.classList.remove('black');
    })
})