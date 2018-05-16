// what: loop through the rows of the board
// how: row=0 , row < sudoku.length
//    what: for each row, we want to loop through each
//    how: col, col=0; i<row.length
//      what: get each element and assign it to value of the input
//      how: document.querySelectorAll('#cell-??????').val(board[row][col])


// Send request
// import {SudokuSolver} from '/node_modules/index.js'
let inputTagsVal = document.querySelectorAll('input').value;
let sudoku = [
  9, 4, 3, 2, 5, 6, 1, 7, 8,
  ".", 6, 8, 7, 9, 1, 5, 3, 4,
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
  let result=[];
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
// function sovlerClick(){
//   solveBut = document.getElementById("solveBut");
//   solveBut.addEventListener("click",solver,false)
//   console.log(solveBut,"<<<<<");
// }

  //  identify the empty cell
  //loop through the
  // loop through the row of the cell
  //loop thorugh the col of the cell

function solver(sudoku, idx){
  var possibilities=[1,2,3,4,5,6,7,8,9];
let soloution=[];
  for (var i = 0; i < sudoku.length; i++){
    if (sudoku[i] !== "."){
      soloution.push(sudoku[i]);
    }
    if (sudoku[i] === "."){
      let idx = i;
      for (var j = idx+1; j < idx+8; j++ ){
        if(possibilities.indexf(j)=== -1){
          soloution.push(possibilities[j]);

        }
      }
    }
  }
}



// console.log(document.querySelectorAll('input'));




// function generator(sudoku) {
//   let inp = document.querySelectorAll("input");
//   console.log(typeof inp,"<<<<<<<inp");
//
// for(var rows = 0; rows < sudoku.length; rows++ ){
//   let row = sudoku[rows];
//   for (var col = 0; col< row.length; col++ ){
//     let eachEl = row[col].toString();
//     let cell = document.querySelectorAll('#cell');
//     // console.log(typeof cell,"<<<<cell");
//       cell.value = eachEl;
//       // console.log(cell.value,"<<<<<cell value");
//       if (cell.value == "0"){
//         inp.value = ""
//       } else {
//         // console.log(typeof inp.value,"<<<type inp value");
//         // console.log(cell.value,"cell val");
//         // document.querySelectorAll
//         inp.value = cell.value;
//         inp.disabled= true;
//         // console.log(inp.value,"inp val");
//
//       }
//   }
// }
// // console.log(inp);
// }
