
let cells = document.getElementsByClassName('cell');
let xCounter = 0;
let oCounter = 0;
let currentTurn = '';
let board = document.querySelector('.board');
let winner = document.getElementById('turn-display');
function checkWinner(turn) {
    if (cells[0].innerHTML === turn && cells[1].innerHTML === turn && cells[2].innerHTML === turn) {
        alert(`The Winner Is ${turn}`);
        board.innerHTML += `<div class="win-line win-row-1"></div>`;
    } else if (cells[3].innerHTML === turn && cells[4].innerHTML === turn && cells[5].innerHTML === turn) {
        alert(`The Winner Is ${turn}`);
        board.innerHTML += `<div class="win-line win-row-2"></div>`;
    } else if (cells[6].innerHTML === turn && cells[7].innerHTML === turn && cells[8].innerHTML === turn) {
        alert(`The Winner Is ${turn}`);
        board.innerHTML += `<div class="win-line win-row-3"></div>`;
    } else if (cells[0].innerHTML === turn && cells[3].innerHTML === turn && cells[6].innerHTML === turn) {
        alert(`The Winner Is ${turn}`);
        board.innerHTML += `<div class="win-line win-col-1"></div>`;
    }
    else if (cells[1].innerHTML === turn && cells[4].innerHTML === turn && cells[7].innerHTML === turn) {
        alert(`The Winner Is ${turn}`);
        board.innerHTML += `<div class="win-line win-col-2"></div>`;
    }
    else if (cells[2].innerHTML === turn && cells[5].innerHTML === turn && cells[8].innerHTML === turn) {
        alert(`The Winner Is ${turn}`);
        board.innerHTML += `<div class="win-line win-col-3"></div>`;
    }
    else if (cells[0].innerHTML === turn && cells[4].innerHTML === turn && cells[8].innerHTML === turn) {
        alert(`The Winner Is ${turn}`);
        board.innerHTML += `<div class="win-line win-diag-main"></div>`;
    }
    else if (cells[2].innerHTML === turn && cells[4].innerHTML === turn && cells[6].innerHTML === turn) {
        alert(`The Winner Is ${turn}`);
        board.innerHTML += `<div class="win-line win-diag-anti"></div>`;
    }
}

function setCurrentTurn() {
    if ((xCounter + oCounter) === 9) {
        document.getElementById('turn-display').innerHTML = 'Finshed';

    } else {

        document.getElementById('turn-display').innerHTML = currentTurn;
    }
}
document.getElementById('start-button').addEventListener('click', () => {
    let iterations = 20;

    for (let i = 0; i < iterations; i++) {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 2);
            currentTurn = randomNumber === 0 ? 'X' : 'O';
            setCurrentTurn();
        }, i * 100);
    }
    initBoard();
});
function initBoard() {
    board.innerHTML = '';
    xCounter=0;
    oCounter=0;
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('click', () => {
            if (cell.innerHTML !== '') {
                alert("This cell is already taken. Please choose another one.");
                return;
            }
            if (currentTurn === '') {
                alert("Press Start First");
                return;
            }
            if (currentTurn === 'X') {
                cell.classList.add('x');
                cell.innerHTML = currentTurn;
                xCounter++;
                if (xCounter >= 3) {
                    checkWinner(currentTurn);
                }
                currentTurn = 'O';
                setCurrentTurn();
            } else {
                cell.classList.add('o');
                cell.innerHTML = currentTurn;
                oCounter++;
                if (oCounter >= 3) {
                    checkWinner(currentTurn);
                }
                currentTurn = 'X';
                setCurrentTurn();
            }
        })
        cell.className = `cell`
        board.appendChild(cell);
    }
}
initBoard();
