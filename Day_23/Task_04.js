// N-Queens
// Write a function that places in queens on an n*n chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queen puzzle.
// log the distinct solution for a few test cases

function solvedNQueens(n){
    const solution = [];
    const board = Array.from({length:n},()=>Array(n).fill('.'));


    const isSafe = (raw , col)=>{


        for(let i=0;i<raw;i++){
            if(board[i][col]==='Q') return false;
            if(col-(raw-i)>=0 && board[i][col-(raw-i)]==='Q') return false;
            if(col+(raw-i)<n && board[i][col+(raw-i)]==='Q') return false;
        }
        return true;
    }
    const backtrack = (raw) =>{
        if(raw===n){
            solution.push(board.map(r=>r.join('')));
            return;
        }
        for(let col = 0;col<n;col++){
            if(isSafe(raw,col)){
                board[raw][col] = 'Q';
                backtrack(raw+1);
                board[raw][col] = '.';
            }
        }
    };
    backtrack(0);
    return solution;
}

// Function to log the solutions in a readable format
function logSolutions(solutions) {
    solutions.forEach((solution, index) => {
        console.log(`Solution ${index + 1}:`);
        solution.forEach(row => console.log(row));
        console.log();
    });
}

// Test cases
const testCases = [4, 5, 6];

testCases.forEach(n => {
    console.log(`N = ${n}`);
    const solutions = solvedNQueens(n);
    logSolutions(solutions);
});