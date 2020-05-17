// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    // variables are defined in the top of the function
    const table = document.getElementById("pixelCanvas");
    let grid = '';
    // loop over each row
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        // loop for each cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid into table element
    table.innerHTML = grid;

    // Add click event to grid cells once the table grid has been created
    addClickEventToCells();
}

function formSubmission() {
    // gets values for height and width from form and uses them to call makeGrid()
    event.preventDefault();
    const height = document.getElementById('inputHeight').value; // save to a variable
    const width = document.getElementById('inputWidth').value; // save to a variabl;e
    makeGrid(height, width);
}

function addClickEventToCells() {
    // add click events to all cells
    // on color selection return color
    const colorPicker = document.getElementById("colorPicker"); // save to a variable
    const cells = document.getElementsByClassName('cell'); // save to a variable
    for (let i = 0; i < cells.length; i++) { // For Loop
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

document.getElementById('sizePicker').onsubmit = function () { // id from .html file
    formSubmission();
};

// Build a default 10x10 grid.
makeGrid(10, 10);