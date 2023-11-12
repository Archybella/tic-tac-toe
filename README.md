Tic-Tac-Toe Game
A simple implementation of the classic Tic-Tac-Toe game using HTML, CSS, and JavaScript.

Table of Contents
Overview
Features
Project Structure
How to Play
Installation
Usage
Contributing
License
Overview
This project is a basic implementation of the Tic-Tac-Toe game that allows two players to take turns marking cells on a 3x3 game board. The game provides a console interface initially and later incorporates a graphical user interface using HTML, CSS, and JavaScript.

Features
Dynamic rendering of the game board.
Two-player functionality with 'X' and 'O' markers.
Checks for winning combinations and ties.
Simple user interface with a restart button.
Project Structure
The project is organized into three main modules:

Gameboard Module: Manages the game board state.
Player Factory: Creates player objects with names and markers.
DisplayController Module: Handles the display logic, rendering the game board, and processing user interactions.
plaintext
Copy code
.
├── index.html
├── style.css
└── script.js
How to Play
Open index.html in a web browser.
Players take turns clicking on empty cells to place their markers ('X' or 'O').
The game checks for winning combinations or ties after each move.
Click the "Restart Game" button to start a new game.
Installation
No installation is required. Simply open the index.html file in a web browser.

Usage
Open index.html in a web browser.
Follow the on-screen instructions to make moves and restart the game.
Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes and commit them (git commit -am 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Create a new pull request.
License
This project is licensed under the MIT License.


