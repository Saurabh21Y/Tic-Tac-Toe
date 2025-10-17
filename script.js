document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset-button');
    const xScoreDisplay = document.getElementById('x-score');
    const oScoreDisplay = document.getElementById('o-score');
    const winningMessageDisplay = document.getElementById('winning-message');
    const winningLine = document.getElementById('winning-line');

    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
    let xWins = 0;
    let oWins = 0;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClick(event) {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

        if (board[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        board[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;

        checkResult(clickedCellIndex);
    }

    function checkResult(lastClickedIndex) {
        let roundWon = false;
        let winningCondition = null;

        for (let i = 0; i < winningConditions.length; i++) {
            const condition = winningConditions[i];
            let a = board[condition[0]];
            let b = board[condition[1]];
            let c = board[condition[2]];

            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                winningCondition = condition;
                break;
            }
        }

        if (roundWon) {
            winningMessageDisplay.textContent = `${currentPlayer} has won!`;
            gameActive = false;
            if (currentPlayer === 'X') {
                xWins++;
                xScoreDisplay.textContent = `X: ${xWins}`;
            } else {
                oWins++;
                oScoreDisplay.textContent = `O: ${oWins}`;
            }
            drawWinningLine(winningCondition);
            return;
        }

        let roundDraw = !board.includes('');
        if (roundDraw) {
            winningMessageDisplay.textContent = 'Game ended in a draw!';
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function drawWinningLine(condition) {
        const firstCell = cells[condition[0]];
        const lastCell = cells[condition[2]];

        const gameBoard = document.getElementById('game-board');
        const gameBoardRect = gameBoard.getBoundingClientRect();

        const firstCellRect = firstCell.getBoundingClientRect();
        const lastCellRect = lastCell.getBoundingClientRect();


        const startX = firstCellRect.left + firstCellRect.width / 2 - gameBoardRect.left;
        const startY = firstCellRect.top + firstCellRect.height / 2 - gameBoardRect.top;
        const endX = lastCellRect.left + lastCellRect.width / 2 - gameBoardRect.left;
        const endY = lastCellRect.top + lastCellRect.height / 2 - gameBoardRect.top;

        const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
        const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));

        winningLine.style.left = `${startX}px`;
        winningLine.style.top = `${startY}px`;
        winningLine.style.width = `${length}px`;
        winningLine.style.transform = `rotate(${angle}deg)`;
        winningLine.style.transformOrigin = 'left center';
        winningLine.style.height = '5px'; // Ensure line is visible
    }

    function resetGame() {
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        cells.forEach(cell => {
            cell.textContent = '';
        });
        winningMessageDisplay.textContent = '';
        winningLine.style.width = '0';
        winningLine.style.height = '0';
        winningLine.classList.remove('horizontal', 'vertical', 'diagonal-1', 'diagonal-2');
    }

    // Initial display of scores
    xScoreDisplay.textContent = `X: ${xWins}`;
    oScoreDisplay.textContent = `O: ${oWins}`;

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);
});
