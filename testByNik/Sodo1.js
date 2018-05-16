


// This is my result of work on Tuesday If Justin you want to look at it
// hopefully this will give me some good result!





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
// @ finding the index of the empty cell
function finder(sudoku,idx){
  for (var idx = 0; idx < arr.length; idx++){
    if (idx ="."){
      return true;
    }else {
      return false;
    }
  }
}
// checking the possibility of numbers
// i have not figure out the 3x3 box yet!!!
function possibilities(sudoku){
  let possible= [1,2,3,4,5,6,7,8, 9]
  let posib;
  for (var i = 0; i < arr.length; i++){
    for (var j =0; j < possible.length; j++ ){
      if (finder(arr[i])){
        posib = Math.floor(Math.random(possibilities[i]) * Math.floor(arr[i]));

      }
    }
  }
return posib;
}

// based on the posibilities of the numbers randomly made
// i have made a solver to call that function out on each empty cell.
function solver(sudoku, idx){
  if(finder(sudoku)){
    for (var row = 0; row < sudoku.length; row++){
      for (var col = 0 ; col < sudoku.length; col++){
        if(possible(sudoku[i][j])){
          return sudoku[i][j];
        }
      }
    }
  }
};

















// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  from line 78 to line 111 is a practice code none of it actually works!!



// // @ First try of the algorithm
// //this is a genetic algorithm
// function gen(arr){
//   var possibilities=[1,2,3,4,5,6,7,8,9];
//   let count = 0
//   let answer;
//   for (var i = 0; i <= 9 ;i++){
//     let result = Math.floor(Math.random(possibilities[i]) * Math.floor(sudoku[i]));
//     console.log(result,"<<<<<<<result");
//     for (var j = 0; j < sudoku.length; j++){
//       if (sudoku[j] === "."){
//         count++;
//         answer = sudoku.splice(j, count, result);
//       }
//     }
// }
// return answer;
// // }
// // console.log(gen(sudoku));
//
// function findIdx(board){
//   let result;
//   for (var i = 0; i < 9; i++){
//     for (var j = 0; j < 9; j++){
//       if (board[i][j] == "."){
//         console.log(board[i][j]);
//         result = gen(board[i][j]);
//         console.log(result,"result of gen");
//       }
//     }
//   }
//   return result;
// }
// console.log(findIdx(sudoku));
