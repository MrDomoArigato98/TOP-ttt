function player(name, mark) {
    return { name, mark };
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

    return { placeMark, board };
})();


const playGame = (function () {

})();


// if(gameBoard.board[0][0]){
//     console.log("works")
// }


// gameBoard.placeMark(0,0,"X")
// console.table(gameBoard.board)