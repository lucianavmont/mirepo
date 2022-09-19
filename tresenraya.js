//profe lea mi codigo porque no me salio pero al menos iontente implementar otras funciones

let board; 
let boton = document.getElementsById("0_0");
var count = 0;

function createBoard(numRows, numCols) {
    const rows = []

    for (let i = 0; i < numRows; i++) {
        const casillas = []

        // crear casillas
        for (let j = 0; j < numCols; j++) {
            casillas.push({
                seMuestra : false,
                emoji : "&#10060;"
            })
        }

        rows.push(casillas)
    }

    return rows
}

function printBoard(board) {
    for (let row of board) {
        let rowStr = ""
        for (let casilla of row) {
            rowStr = rowStr + casilla + " "
        }
        console.log(rowStr)
    }
}

function setValue(board, row, col, value) {
    board[row][col] = value
}

const getValue = (board, row, col) => {
    return board[row][col]
}
boton.onclick = function () {
    count++;
}

const renderizarBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            const butCasilla = document.getElementById(`${i}_${j}`) // string interpolation
            if (casillas[j].seMuestra) {
                butCasilla.innerHTML = casillas[j].emoji
            }else {
                butCasilla.innerHTML = ""
            }
            
        }
    }
}

 // DESHABILITAR CASILLAS
 /*
function  desCasillas(){
    if--> game over
    document.getElementsByClassName("grid").disabled = true;
}
  */ 
const casillaOnClick = (row, col) => {
    const casilla = getValue(board, row, col)
    casilla.seMuestra = true
    renderizarBoard(board)
}

const main = () => {
    board = createBoard(3, 3) 
    renderizarBoard(board)


    renderizarBoard(board)

}

main()
