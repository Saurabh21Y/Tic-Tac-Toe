# Tic-Tac-Toe Game

A simple, modern, and responsive Tic-Tac-Toe game built with vanilla HTML, CSS, and JavaScript. This project demonstrates clean UI design, DOM manipulation, event handling, game logic (win/draw detection), and a basic light/dark theme toggle.

## Demo
- Open `index.html` directly in any modern web browser to play locally.
- Optional: Host via GitHub Pages (instructions below).

## Features
- Classic 3x3 Tic-Tac-Toe gameplay (Player O vs Player X)
- Turn-based interactions with disabled squares after selection
- Automatic win detection and winner announcement
- "New Game" and "Reset Game" controls to restart the game
- Theme toggle button to switch between default and dark theme
- Responsive layout using `vmin`-based sizing

## Tech Stack
- HTML5 (`index.html`)
- CSS3 (`style.css`)
- Vanilla JavaScript (`script.js`)

## Project Structure
```
Tic Tac Toe/
├── index.html     # Main HTML document and game layout
├── style.css      # Styles, layout, colors, typography, responsive sizing
└── script.js      # Game logic, event listeners, state management
```

## How to Run Locally
1. Clone or download the repository.
2. Open `index.html` with your browser (Chrome, Firefox, Edge, Safari).
   - No build step, server, or dependencies required.

## How to Play
- The board is a 3x3 grid of buttons.
- Player O starts first; players alternate turns automatically.
- Click an empty square to place your mark (O or X).
- The game detects wins across rows, columns, or diagonals and shows a winner banner.
- Use the following controls:
  - "Theme": toggle dark mode.
  - "New Game": start a new round.
  - "Reset Game": reset the current board and hide the banner.

## UI Overview
- Title and heading at the top.
- 3x3 button grid centered in the page.
- Message banner appears when a player wins.
- Footer with author credit.

## Code Overview
- `index.html`
  - Declares the layout: heading, message container, 3x3 grid, and footer.
  - Buttons with class `box` represent the 9 playable squares.
  - Control buttons: `#theme`, `#new-game`, `#reset-btn`.

- `style.css`
  - Primary background: `#14213d` and dark mode background: `#1a1d23` when `body.dark` is active.
  - Grid sizing uses `vmin` units to remain responsive.
  - Button styling, hover shadows, and readable colors for O/X.
  - Footer styled and fixed to the bottom.

- `script.js`
  - Selectors: `.box` elements, control buttons, message container (`.msg`) and `#message` text node.
  - Game state:
    - `turn0` boolean to alternate turns between O and X (O starts).
    - `winPatterns` with all winning index combinations.
  - Core functions:
    - `enableBox()` and `disableBox()` to control board interactivity and clear text.
    - `showWinner(winner)` displays the winner message and disables the board.
    - `checkWinner()` loops over `winPatterns` to detect a win and triggers `showWinner()`.
    - `resetGame()` re-enables the board and hides the winner message.
  - Event bindings:
    - Click on each `.box` updates text to `O`/`X`, disables the clicked box, and checks for a winner.
    - `#reset-btn` and `#new-game` both call `resetGame()`.
    - `#theme` toggles `body.dark` for dark mode.

## Edge Cases and Behavior
- A box cannot be clicked twice; it is disabled after the first click.
- Winner message appears immediately on win, preventing further moves.
- Draw detection can be added as an enhancement (see below).

## Potential Improvements
- Draw detection and message when the board is full without a winner.
- AI/Computer opponent (easy/medium/hard) using minimax or heuristics.
- Scoreboard tracking wins across multiple rounds.
- Animations for moves and winning line highlight.
- Sound effects and subtle haptics (where supported).
- Accessibility improvements: ARIA roles, focus states, keyboard controls, and screen reader text.
- Unit tests for core logic (e.g., `checkWinner`).

## Getting Started (Developers / Reviewers)
- No external dependencies or build tools.
- Code is intentionally simple and readable for quick review.
- Suitable as an entry-level demonstration of DOM manipulation and game logic.

## Deployment
### GitHub Pages
1. Push this repository to GitHub.
2. In the GitHub repository, navigate to Settings → Pages.
3. Under "Build and deployment", choose:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default) and folder: `/ (root)`
4. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/` after a few minutes.

### Any Static Host
- Upload the three files (`index.html`, `style.css`, `script.js`) to any static hosting service (e.g., Netlify, Vercel, Cloudflare Pages, S3 static site).

## Screenshots (Optional)
You can add screenshots or a short GIF to showcase gameplay. For example, create a `screenshots/` folder and reference images in this README:
```
![Gameplay](screenshots/gameplay.png)
```

## Author
- © All copyrights reserved @Saurabh21Y
- Created: 2025-09-19

## License
This project is shared for learning and portfolio purposes. You may adapt it with credit. For production use, consider adding an explicit open-source license (e.g., MIT, Apache-2.0).
