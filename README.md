# Rock Paper Scissors

This is a simple implementation of the classic game "Rock Paper Scissors" using HTML, CSS, and JavaScript.

## How to Play
1. Open the `index.html` file in a web browser.
2. You will see three buttons representing rock, paper, and scissors.
3. Click on one of the buttons to make your move.
4. The computer will randomly select its move.
5. The result will be displayed, indicating whether you win, lose, or it's a tie.
6. The score for both the player and the computer will be updated accordingly.
7. The first player to reach a score of 5 wins the game.
8. Once the game ends, you can click on any button to start a new game.

## Technologies Used
- HTML
- CSS
- JavaScript

## Files
- `index.html`: The main HTML file that displays the game interface.
- `style.css`: The CSS file that provides the styling for the game.
- `script.js`: The JavaScript file that contains the game logic.

## Game Logic
The game logic is implemented in the `script.js` file. Here's a brief overview of how it works:
- The `getComputerChoice()` function randomly selects the computer's move.
- Each button has an event listener that triggers the game when clicked.
- The `playGame()` function determines the outcome of the game based on the player's and computer's choices.
- The score and result display elements are updated accordingly.
- The `checkResult()` function checks if either the player or the computer has reached a score of 5, indicating the end of the game.
- The `resetScore()` function resets the scores to 0 when the game ends.

Feel free to modify and enhance the code to add new features or improve the user interface. Enjoy playing Rock Paper Scissors!
