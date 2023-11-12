// Gameboard module
const Gameboard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => [...board];

    const markCell = (index, marker) => {
        if (board[index] === '') {
            board[index] = marker;
            return true; // Cell marked successfully
        }
        return false; // Cell already occupied
    };

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
    };

    return {
        getBoard,
        markCell,
        resetBoard,
    };
})();

// Player factory
const Player = (name, marker) => ({
    name,
    marker,
});

// DisplayController module
const DisplayController = (() => {
    const gameBoardElement = document.getElementById('game-board');
    const resultElement = document.getElementById('result');
    const restartButton = document.getElementById('restart-btn');

    const renderBoard = () => {
        const board = Gameboard.getBoard();
        gameBoardElement.innerHTML = '';

        board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.textContent = cell;
            cellElement.addEventListener('click', () => makeMove(index));
            gameBoardElement.appendChild(cellElement);
        });
    };

    const displayResult = (result) => {
        resultElement.textContent = result;
    };

   const makeMove = (index) => {
        const currentPlayer = players[currentPlayerIndex];
        if (Gameboard.markCell(index, currentPlayer.marker)) {
            renderBoard();
            if (checkGameResult()) {
                displayResult(`${currentPlayer.name} wins!`);
            } else if (Gameboard.getBoard().every(cell => cell !== '')) {
                displayResult('It\'s a tie!');
            } else {
                togglePlayer();
            }
        }
    };
    

    const checkGameResult = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6], // Diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            const board = Gameboard.getBoard();

            if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
                return true; // Found a winning combination
            }
        }

        return false; // No winning combination found
    };

    const restartGame = () => {
        Gameboard.resetBoard();
        renderBoard();
        resultElement.textContent = '';
        currentPlayerIndex = 0;
    };

    const togglePlayer = () => {
        currentPlayerIndex = 1 - currentPlayerIndex;
    };

    // Players
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');
    const players = [player1, player2];
    let currentPlayerIndex = 0;

    // Event listeners
    restartButton.addEventListener('click', restartGame);

    // Initial rendering
    renderBoard();

    // Public methods
    return {
        renderBoard,
        displayResult,
    };
})();
