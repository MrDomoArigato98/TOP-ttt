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
        console.log("resetting board")
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]];
        //Set it to empty string as above
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                displayController.updateCell(i,j,"")
            }
        }
    }

    const placeMark = (x, y, mark) => {
        let board = getBoard();
        if (!board[x][y]) {
            console.log("Placing " + mark + " on: " + x, y, mark)
            board[x][y] = mark;
            
            //Should probably update the display here as well
            displayController.updateCell(x, y, mark)
            
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
                //return
            }

            if (board[0][row] && board[0][row] == board[1][row] && board[1][row] === board[2][row]) {
                console.log("Winner across the column: " + board[0][row] + board[1][row] + board[2][row]);
                //return
            }
        }

        //Checking diagonals
        if (board[2][0] && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
            console.log("Winner across the diagonal");
            //return
        }

        if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            console.log("Winner across the diagonal");
            //return
        }

        if (board.flat().every(cell => cell !== "")) {
            return "draw"
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

const displayController = (function () {

    const gridCells = document.querySelectorAll(".cell")
    const getCells = () => gridCells;

    gridCells.forEach(cell => {
        cell.addEventListener('click', function () {
            const cellAttr = cell.attributes;
            const xAttr = cellAttr.getNamedItem('data-x').value
            const yAttr = cellAttr.getNamedItem('data-y').value
            playGame.makeMove(xAttr, yAttr)
            console.log(xAttr + " " + yAttr);

        })
    });

    const updateCell = (x, y, mark) => {
        const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
        if (cell) {
            const h1 = cell.querySelector("h1")
            h1.textContent = mark;
        }
    }


    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.addEventListener('click', function (){
            gameBoard.resetBoard();
        })
    })

    console.log(buttons)

    return { getCells, updateCell }

})();



let a = displayController.getCells();
let attr = a.attributes
console.log(a);
