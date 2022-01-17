// create a 16x16 grid of square divs
// create a grid the width of the window
// use grid template columns or display flex to make 16 equal boxes
// probably need to create a style sheet

const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container')
const BODY = document.querySelector('body');
const JS = document.querySelector('script');
const BUTTON = document.createElement('button');
BUTTON.innerText = 'Reset'
let userRow;
let userColumn;

BODY.insertBefore(BUTTON, JS);
BODY.insertBefore(CONTAINER, JS);

function reset() {
    while (CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
}

function draw() {
    userRow = prompt('How many rows should be in the grid?')
    while (userRow.includes('.') ||
            !parseInt(userRow, 10) || 
            userRow > 100) { 
        userRow = prompt('Please enter a valid integer less than 100.');
        
    }
    
    userColumn = prompt('How many columns should be in the grid?') 
    while (userColumn.includes('.') || 
            !parseInt(userColumn, 10) || 
            userRow > 100) {
        userColumn = parseInt(prompt('Please enter a valid integer less than 100.'))
    }
}

function pixelTransform(node) {
    node.target.classList.add('hover'); // adds css class to color in pixel
}

function createGrid(row,col) {
    for (let i = 0; i < col; i++) {
        let col = document.createElement('div');
        col.classList.add('pixel', 'column');
        
        for (let j = 0; j < row; j++) {
            let row = document.createElement('div');
            row.classList.add('pixel', 'row');
            row.addEventListener('mouseover', pixelTransform)
            col.appendChild(row);
        }
        CONTAINER.appendChild(col);
    }
}

BUTTON.addEventListener('click', () => {
    reset();
    draw();
    createGrid(userRow,userColumn);
});




