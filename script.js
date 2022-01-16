// create a 16x16 grid of square divs
// create a grid the width of the window
// use grid template columns or display flex to make 16 equal boxes
// probably need to create a style sheet

const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container')
const BODY = document.querySelector('body');
const JS = document.querySelector('script');


// need to create 16 columns
// within each column, 16 boxes

function createGrid(row,col) {
    for (let i = 0; i < row; i++) {
        let row = document.createElement('div');
        row.classList.add('pixel', 'row');
        
        for (let j = 0; j < col; j++) {
            let column = document.createElement('div');
            column.classList.add('pixel', 'column');
            row.appendChild(column);
        }
        CONTAINER.appendChild(row);
    }
}
    
createGrid(16,16);

BODY.insertBefore(CONTAINER, JS);