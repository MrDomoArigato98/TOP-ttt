function player(name) {
    return { name };
}


const gameBoard = (function () {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]];

    const placeMark = (x, y, mark) => {
        console.log(x, y, mark)
        board[x][y] = mark;
    };

    const checkWinner = () => {

    }
    return { placeMark, board };
})();



// gameBoard.placeMark(0,0,"X")
// console.table(gameBoard.board)