function player(name, mark) {
    return { name, mark };
}

//GameBoard will contain everything about the game, and methods you can use against the board 2d array i.e. placing 'X' 'O'
const gameBoard = (function () {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]];

    const getBoard = () => board;

    const resetBoard = () => {
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]];
    }

    const placeMark = (x, y, mark) => {
        let board = getBoard();
        if (!board[x][y]) {
            console.log("Placing " + mark + " on: " + x, y, mark)
            board[x][y] = mark;
            console.table(board)
            checkWinner();

        } else { console.log("Marker already here is: " + board[x][y]) }

    };

    const checkWinner = () => {
        let board = getBoard();
        const boardLength = board.length;
        /*
        Checking Rows. Can also do across the columns here in a single for loop rather than making another one. 
        As columns are basically vertical rows
        */
        for (let row = 0; row < boardLength; row++) {
            // console.log(row)
            if (board[row][0] && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
                console.log("Winner across the row: " + row);
            }

            if (board[0][row] && board[0][row] == board[1][row] && board[1][row] === board[2][row]) {
                console.log("Winner across the column: " + board[0][row] + board[1][row] + board[2][row]);
            }
        }

        //Checking diagonals
        if(board[2][0] && board[2][0] === board[1][1] && board[1][1] === board [0][2]){
            console.log("Winner across the diagonal");
        }

        if(board[0][0] && board[0][0] === board [1][1] && board[1][1] === board[2][2]){
            console.log("Winner across the diagonal");
        }


    }
    return { placeMark, getBoard, resetBoard, checkWinner };
})();

//So probably doing everything about the game can be done in playGame.
const playGame = (function () {

    //Maybe give a user choice to get the player
    let playerX = player("Dom", "X")
    let playerY = player("Vanessa", "Y")
    let switchPlayer = true;

    const makeMove = (x, y) => {
        if (switchPlayer) {
            gameBoard.placeMark(x, y, playerX.mark)
            switchPlayer = false
        } else {
            gameBoard.placeMark(x, y, playerY.mark)
            switchPlayer = true;
        }
    }

    const switchPlayerFn = () => {
        if (switchPlayer) {
            switchPlayer = false
        } else {
            switchPlayer = true;
        }
    }

    return { makeMove, switchPlayerFn }
})();


// if(gameBoard.board[0][0]){
//     console.log("works")
// }


// gameBoard.placeMark(0,0,"X")
// console.table(gameBoard.board)