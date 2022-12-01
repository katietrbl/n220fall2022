console.log('hi');

/*----- constants -----*/

const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h4');

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- set variable -----*/

//initiate game state
let board;
//begin game with x
let turn = 'x';
//create win condition
let win;


/*----- event listeners -----*/
//listen to click to give a callback function when its heard
document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('restart-button').addEventListener('click', init);

/*----- functions -----*/

function init(){
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    render();
}


function render(){
    board.forEach(function(mark, index){
        //set text content of square of the position to the mark on the board
        squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
}

//this function tells the program who is going when
function handleTurn(event){
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    //if it is x's turn we assign turn to o.
    //if it is not x's turn then assign turn to o.
    //this makes it easier to deal with who goes when
    turn = turn === 'X' ? 'O' : 'X';
    win = getwinner();
    render();
}

function getwinner(){
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
}

init();