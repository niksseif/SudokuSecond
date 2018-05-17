// what: loop through the rows of the board
// how: row=0 , row < sudoku.length
//    what: for each row, we want to loop through each
//    how: col, col=0; i<row.length
//      what: get each element and assign it to value of the input
//      how: document.querySelectorAll('#cell-??????').val(board[row][col])


// const _ = require('underscore');
let inputTagsVal = document.querySelectorAll('input').value;
let sudoku = [
  9, 4, 3, ".", 5, 6, 1, 7, 8,
  ".", 6, 8, ".", 9, 1, ".", 3, 4,
  7, 5, 1, 3, 4, 8, ".", 6, 2,
  5, ".", 2, 1, 3, 4, 6, 8, 7,
  1, 7, 6, ".", 8, 2, 4, 5, 3,
  ".", 3, ".", 6, 7, 5, 2, 1, 9,
  3, 1, 5, 8, 2, ".", 7, 4, 6,
  6, 2, ".", 4, 1, ".", 8, ".", 5,
  4, 8, ".", 5, 6, ".", 3, 2, 1
];
let solution = [
  9, 4, 3, 2, 5, 6, 1, 7, 8,
  // [6, 6, 8, 7, 9, 1, 5, 3, 4], //<-- broken answer
  2, 6, 8, 7, 9, 1, 5, 3, 4,
  7, 5, 1, 3, 4, 8, 9, 6, 2,
  5, 9, 2, 1, 3, 4, 6, 8, 7,
  1, 7, 6, 9, 8, 2, 4, 5, 3,
  8, 3, 4, 6, 7, 5, 2, 1, 9,
  3, 1, 5, 8, 2, 9, 7, 4, 6,
  6, 2, 7, 4, 1, 3, 8, 9, 5,
  4, 8, 9, 5, 6, 7, 3, 2, 1
];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll("input").forEach((a, idx) => {

      if (sudoku[idx] === ".") {
      a.value = '';
      } else {
      a.value =  sudoku[idx]
      a.disabled = true
      }
});
});

// function arrayToString(sudoku){
//   sudoku.toString();
//   console.log(sudoku);
// }



// @triggering the value of the grid

// Added iife to the function to be able to load
//  both functions at the same time.otherwise
//  if you don't do that iy won't give an alert for the numbers
(function val() {
  inputTagsVal = document.querySelectorAll('input').value;

  document.addEventListener('keyup', (e) => {
    const value = e.target.value;
    inputTagsVal = value;
    if (!Number(inputTagsVal)) {
      alert('PLease add a number');
    }else if(inputTagsVal > 9 || inputTagsVal < 1 ){
        alert('PLease add number between 1 to 9');

    }

  },false);
})();
//
// function stringMaker(sudoku){
//   let str;
//   for(var i =0; i < arr.length; i++){
//     str = String(arr[i]);
//     console.log(str,"str");
//   }
//   return str;
// }

function checkSudoku(input){
  let isValid = false;

  //first check horizontal rows for numbers 1 thru 9
  for ( let row = 0; row < input.length; row++ ) {
    const possibilities = [1,2,3,4,5,6,7,8,9]
    //if any horizontal row has duplicates, then solution is FALSE
    if ( _.uniq(input[row]).length !== input[row].length ){ return false };

let wholeColumn = [];

    for ( let column = 0; column < input[row].length; column++ ) {
      let rowNumber = input[row][column];

      let columnNumber = input[column][row];

      wholeColumn.push(columnNumber)
// console.log(wholeColumn,"wholeColumn");
// console.log(wholeColumn,"wholeColumn");
      //if rowNumber is not contained in possibilities
      if ( possibilities.indexOf(rowNumber) === -1 ) {
        return false;
      }

      if (  possibilities.indexOf(columnNumber) === -1 ) {
        return false;
      }
    }

    //if any vertical column has duplicates, then solution is FALSE
    if ( _.uniq(wholeColumn).length !== wholeColumn.length ){ return false };
  }

  // check 3x3 boxes for numbers 1 thru 9

  // how to make 3 x 3 boxes?

  // for-loop that passes over each third of our sudoku?
  let allBoxes = [];
  let first = [];

  // let second = [];
  // let third = [];
  //this slices the row by threes (which is what we want)
  // row box is the first 3 rows off the soloution
  let boxRow = Math.sqrt(input.length / 3);
  // let boxCol = Math.floor(input[row].length / 3);
  let colBox= []
  letboxthree=[];
  for ( let row = 0; row < input.length / 3 ; row++ ) {
    console.log("input[row]>>>>>",input[row])

    for (var col = 0; col < input[row].length / 3; col++ )
    console.log("input[row][col]........",input[row][col]);
    // console.log("this is first>>>",first);
  }

  //check them!


  return isValid;
}



// console.log("solution>>>>","\n",solution);
// console.log(checkSudoku(solution));
let solver = document.getElementById('solveBut');
solver.addEventListener("click",(e) => {
  if (e ){
    document.querySelectorAll("input").forEach((a, idx) => {

      a.value =   solution[idx] ;
});
  }
} , false);

// document.querySelectorAll("input").forEach((a, idx) => {
//
//     if (sudoku[idx] === ".") {
//     a.value = '';
//     } else {
//     a.value =  sudoku[idx]
//     a.disabled = true
//     }
// });
// });
