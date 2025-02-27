function player(name, mark) {
    return { name, mark };
}

//GameBoard will contain everything about the game, and methods you can use against the board 2d array i.e. placing 'X' 'O'
const gameBoard = (function () {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]];

    const placeMark = (x, y, mark) => {
        console.log(x, y, mark)
        board[x][y] = mark;
    };

    return { placeMark, board };
})();

//So probably doing everything about the game can be done in playGame.
const playGame = (function () {

    //Maybe give a user choice to get the player
    let playerX = player("Dom", "X")
    let playerY = player("Vanessa", "Y")

    let switchPlayer = true;

    if (switchPlayer) {
        
        switchPlayer = false
    } else {

        switchPlayer = true;
    }

    // return{playerX,playerY}


})();


// if(gameBoard.board[0][0]){
//     console.log("works")
// }


// gameBoard.placeMark(0,0,"X")
// console.table(gameBoard.board)