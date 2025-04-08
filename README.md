# Character Attributes Game: Comprehensive Code Tutorial

This tutorial provides a line-by-line explanation of the Character Attributes Game code, consisting of both HTML/CSS and JavaScript components.

## Table of Contents
1. [HTML Structure](#html-structure)
2. [CSS Styling](#css-styling)
3. [JavaScript](#javascript)
   - [Data Structures](#data-structures)
   - [Game Variables](#game-variables)
   - [DOM Elements](#dom-elements)
   - [Event Listeners](#event-listeners)
   - [Game Functions](#game-functions)

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
```
This declares the document as HTML5 and sets the language to English.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character Attributes Game (Simplified)</title>
```
The head section contains metadata: UTF-8 character encoding, responsive viewport settings, and the page title.

```html
<style>
    /* General Styles */
    body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5f5f5;
    }
```
This begins the CSS section. The body styling sets a sans-serif font, limits the content width to 800px, centers it with `margin: 0 auto`, adds padding, and sets a light gray background.

```html
    h1, h2, h3 {
        color: #2c3e50;
    }
```
This sets all headings to a dark blue-gray color.

```html
    button {
        background-color: #3498db;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 4px;
        margin: 5px;
    }

    button:hover {
        background-color: #2980b9;
    }

    button:disabled {
        background-color: #95a5a6;
        cursor: not-allowed;
    }
```
These rules style buttons with a blue background, white text, no border, rounded corners, and hover/disabled states.

```html
    /* Game Container */
    .game-container {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        padding: 20px;
    }
```
This creates a white container for the game with rounded corners and a subtle shadow.

```html
    /* Game Header */
    .game-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
```
The game header uses flexbox to position elements (title and score) on opposite sides with a bottom border.

```html
    /* Character Section */
    .character-display {
        text-align: center;
        padding: 20px;
        background-color: #f8f9fa;
        border-radius: 8px;
        margin: 0 auto 20px;
        max-width: 300px;
    }

    .character-image {
        width: 150px;
        height: 150px;
        border-radius: 8px;
        margin-bottom: 10px;
        border: 3px solid #2ecc71;
    }

    .character-name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 5px;
        color: #2c3e50;
    }
```
These rules style the character display area, including the character image (150px square with a green border) and name.

```html
    /* Question Section */
    .question-section {
        background-color: #f0f7ff;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        border-left: 5px solid #3498db;
    }

    .question {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #2c3e50;
        text-align: center;
    }

    .answer-buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
    }
    
    #yesBtn {
        background-color: #2ecc71;
    }
    
    #noBtn {
        background-color: #e74c3c;
    }
```
This styles the question section with a light blue background and left border, centers the question text, and creates a flex container for the Yes/No buttons (green and red respectively).

```html
    /* Result Section */
    .result-section {
        text-align: center;
        padding: 15px;
        margin-top: 20px;
        border-radius: 8px;
        display: none;
    }

    .correct {
        background-color: #d4edda;
        color: #155724;
        border-left: 5px solid #2ecc71;
    }

    .incorrect {
        background-color: #f8d7da;
        color: #721c24;
        border-left: 5px solid #e74c3c;
    }
```
These style the result feedback section (initially hidden) with styles for correct (green) and incorrect (red) states.

```html
    /* Game End */
    .game-end {
        text-align: center;
        padding: 20px;
        margin-top: 20px;
        background-color: #f8f9fa;
        border-radius: 8px;
        display: none;
    }
```
This styles the game-end section that appears when all questions are answered (initially hidden).

```html
    /* Attributes Container */
    .attributes-container {
        display: none;
        margin-top: 20px;
        padding: 20px;
        background-color: #f8f9fa;
        border-radius: 8px;
    }

    .attribute-list {
        list-style-type: none;
        padding: 0;
    }

    .attribute-list li {
        padding: 5px 0;
    }
```
These style the attributes container (initially hidden) and its list items.

```html
    /* Character Disposition Colors */
    .nice {
        color: #27ae60;
        font-weight: bold;
    }

    .neutral {
        color: #3498db;
        font-weight: bold;
    }

    .rude {
        color: #e74c3c;
        font-weight: bold;
    }
```
These define colors for character dispositions: green for nice, blue for neutral, and red for rude.

```html
    /* Attribute Values */
    .true {
        color: #27ae60;
        font-weight: bold;
    }

    .false {
        color: #e74c3c;
        font-weight: bold;
    }
```
These define colors for attribute values: green for true and red for false.

```html
    /* Controls */
    .controls {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
    }
</style>
```
This styles the controls section with centered buttons.

```html
</head>
<body>
    <h1>Character Attributes Game (Simplified)</h1>
    
    <div class="game-container">
        <div class="game-header">
            <h2>Guess the Character Attributes</h2>
            <div class="score">Score: <span id="currentScore">0</span>/<span id="totalQuestions">0</span></div>
        </div>
```
The body starts with the main heading and game container, which includes a header with the game title and score display.

```html
        <div class="character-display">
            <img id="characterImage" class="character-image" src="images/character-find.webp" alt="Character"> 
            <div class="character-name" id="characterName">???</div>
            <div id="characterDisposition"></div>
        </div>
```
This creates the character display with a placeholder image, name (initially "???"), and an empty disposition div.

```html
        <div class="question-section">
            <div class="question" id="question">Loading question...</div>
            <div class="answer-buttons">
                <button id="yesBtn">Yes</button>
                <button id="noBtn">No</button>
            </div>
        </div>
```
This creates the question section with a loading message and Yes/No buttons.

```html
        <div class="result-section" id="resultSection">
            <h3 id="resultText">Correct!</h3>
        </div>
```
This div will show the result of each answer (initially hidden).

```html
        <div class="attributes-container" id="attributesContainer">
            <h3>Character Attributes</h3>
            <ul class="attribute-list" id="attributeList"></ul>
        </div>
```
This container will display the character attributes when requested (initially hidden).

```html
        <div class="game-end" id="gameEnd">
            <h2>Game Complete!</h2>
            <div id="finalScore">You scored: 0/0</div>
            <p>You've completed all questions for this character!</p>
        </div>
```
This section appears when the game is complete (initially hidden).

```html
        <div class="controls">
            <button id="showAttributesBtn">Show Attributes</button>
            <button id="newGameBtn">New Game</button>
        </div>
    </div>

    <script src="simplified-game.js"></script>
</body>
</html>
```
The controls section contains buttons to show attributes and start a new game. Finally, the JavaScript file is linked.

## JavaScript

### Data Structures

```javascript
// Character database
const characters = [
    { 
        name: "Dr. Retro",
        image: "images/Dr.RETRO.webp", 
        disposition: "Neutral", 
        avatar: false, 
        fancyMesh: false,
        sharesFloors: false,
        multipleFloorEntry: false, 
        moreLimbs: false, 
        lessLimbs: true, 
        normalHeight: false, 
        tall: false,
        human: true, 
        robot: false, 
        animal: false, 
        speaks: true, 
        wearsHat: true,
        hurtsYou: false,
        givesEffect: false,
        doesntSpeak: false 
    },
    // Additional characters...
];
```
This defines an array of character objects, each with properties like name, image path, disposition, and various boolean attributes.

```javascript
// Boolean attributes list
const booleanAttributes = [
    "avatar", "fancyMesh", "sharesFloors", "multipleFloorEntry", 
    "moreLimbs", "lessLimbs", "normalHeight", "tall", 
    "human", "robot", "animal", "speaks", 
    "wearsHat", "hurtsYou", "givesEffect", "doesntSpeak"
];
```
This array lists all the boolean attributes that characters can have, used for display and processing.

```javascript
// Questions and their mappings to character attributes
const questionAttributeMap = [
    { question: "Is the character's model use a roblox avatar?", attribute: "avatar" },
    // Additional questions...
    { question: "Does the Character act nice?", attribute: "disposition", value: "Nice" },
    // More questions...
];
```
This array maps questions to character attributes. Most questions directly map to boolean attributes, while disposition questions have an additional `value` property.

### Game Variables

```javascript
// Game state variables
let currentCharacter = null;
let usedQuestions = [];
let currentScore = 0;
let currentQuestionIndex = -1;
let gameActive = true;
let maxQuestions = 10;
```
These variables track the game state:
- `currentCharacter`: The randomly selected character for the current game
- `usedQuestions`: Array of question indices that have already been asked
- `currentScore`: Player's current score
- `currentQuestionIndex`: The index of the currently active question
- `gameActive`: Whether the game is currently active
- `maxQuestions`: Maximum number of questions per game

### DOM Elements

```javascript
// DOM elements
const elements = {
    characterImage: document.getElementById('characterImage'),
    characterName: document.getElementById('characterName'),
    characterDisposition: document.getElementById('characterDisposition'),
    question: document.getElementById('question'),
    currentScore: document.getElementById('currentScore'),
    totalQuestions: document.getElementById('totalQuestions'),
    resultSection: document.getElementById('resultSection'),
    attributesContainer: document.getElementById('attributesContainer'),
    attributeList: document.getElementById('attributeList'),
    gameEnd: document.getElementById('gameEnd'),
    finalScore: document.getElementById('finalScore'),
    yesBtn: document.getElementById('yesBtn'),
    noBtn: document.getElementById('noBtn'),
    showAttributesBtn: document.getElementById('showAttributesBtn'),
    newGameBtn: document.getElementById('newGameBtn')
};
```
This object stores references to all DOM elements needed for the game, retrieved using `getElementById()`.

### Event Listeners

```javascript
// Initialize game when the page loads
window.addEventListener('DOMContentLoaded', function() {
    // Add event listeners
    elements.yesBtn.addEventListener('click', function() {
        processAnswer(true);
    });

    elements.noBtn.addEventListener('click', function() {
        processAnswer(false);
    });

    elements.showAttributesBtn.addEventListener('click', function() {
        toggleAttributes();
    });

    elements.newGameBtn.addEventListener('click', function() {
        initGame();
    });

    // Start the game
    initGame();
});
```
This code runs when the page loads, setting up event listeners for all buttons:
- Yes button calls `processAnswer(true)`
- No button calls `processAnswer(false)`
- Show Attributes button calls `toggleAttributes()`
- New Game button calls `initGame()`

Finally, it starts the game by calling `initGame()`.

### Game Functions

```javascript
// Initialize the game
function initGame() {
    // Reset game state
    usedQuestions = [];
    currentScore = 0;
    gameActive = true;

    // Select a random character
    currentCharacter = characters[Math.floor(Math.random() * characters.length)];
    
    // Update UI with default/hidden info
    elements.characterImage.src = "images/character-find.webp";
    elements.characterName.textContent = "???";
    elements.characterDisposition.textContent = "";
    elements.currentScore.textContent = "0";
    elements.totalQuestions.textContent = "0";

    // Hide non-active sections
    if (elements.resultSection) {
        elements.resultSection.style.display = 'none';
    }
    elements.gameEnd.style.display = 'none';
    elements.attributesContainer.style.display = 'none';

    // Enable answer buttons
    elements.yesBtn.disabled = false;
    elements.noBtn.disabled = false;

    // Ask first question
    askNextQuestion();
}
```
This function initializes the game by:
1. Resetting game state variables
2. Randomly selecting a character from the `characters` array
3. Updating the UI to show default/hidden information
4. Hiding non-active sections
5. Enabling the answer buttons
6. Calling `askNextQuestion()` to display the first question

```javascript
// Select and display the next question
function askNextQuestion() {
    // If we've used max questions, end the game
    if (usedQuestions.length >= Math.min(maxQuestions, questionAttributeMap.length)) {
        endGame();
        return;
    }

    // Find an unused question
    let availableQuestions = [];
    for (let i = 0; i < questionAttributeMap.length; i++) {
        if (!usedQuestions.includes(i)) {
            availableQuestions.push(i);
        }
    }

    // If no more questions, end the game
    if (availableQuestions.length === 0) {
        endGame();
        return;
    }

    // Select a random question
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestionIndex = availableQuestions[randomIndex];
    usedQuestions.push(currentQuestionIndex);

    // Update UI with the new question
    elements.question.textContent = questionAttributeMap[currentQuestionIndex].question;
    elements.totalQuestions.textContent = usedQuestions.length;

    // Enable answer buttons
    elements.yesBtn.disabled = false;
    elements.noBtn.disabled = false;
}
```
This function selects and displays the next question:
1. Checks if we've reached the maximum number of questions, ending the game if so
2. Builds an array of unused questions
3. Checks if there are any available questions, ending the game if not
4. Randomly selects a question from the available ones
5. Updates the UI with the new question
6. Enables the answer buttons

```javascript
// Process the player's answer
function processAnswer(answer) {
    if (!gameActive) return;

    // Get current question
    const questionMapping = questionAttributeMap[currentQuestionIndex];
    let isCorrect = false;

    // Check if answer is correct
    if (questionMapping.attribute === "disposition") {
        isCorrect = (answer === (currentCharacter.disposition === questionMapping.value));
    } else {
        isCorrect = (answer === currentCharacter[questionMapping.attribute]);
    }

    // Update score if correct
    if (isCorrect) {
        currentScore++;
        elements.currentScore.textContent = currentScore;
    }

    // Move to next question
    askNextQuestion();
}
```
This function processes the player's answer:
1. Returns early if the game is not active
2. Gets the current question mapping
3. Checks if the answer is correct:
   - For disposition questions, compares the answer to whether the character's disposition matches the question's value
   - For other questions, directly compares the answer to the character's attribute value
4. Updates the score if the answer is correct
5. Moves to the next question

```javascript
// End the game and show results
function endGame() {
    gameActive = false;

    // Reveal character info
    elements.characterName.textContent = currentCharacter.name;
    elements.characterDisposition.innerHTML = 
        `<span class="${currentCharacter.disposition.toLowerCase()}">${currentCharacter.disposition}</span>`;
    
    // Show character image if available
    if (currentCharacter.image && currentCharacter.image !== "images/") {
        elements.characterImage.src = currentCharacter.image;
    }

    // Show game end section
    elements.gameEnd.style.display = 'block';
    elements.finalScore.textContent = 
        `You scored: ${currentScore}/${usedQuestions.length}`;

    // Disable answer buttons
    elements.yesBtn.disabled = true;
    elements.noBtn.disabled = true;
}
```
This function ends the game and displays the results:
1. Sets `gameActive` to false
2. Reveals the character's name and disposition
3. Shows the character's image if available
4. Displays the game end section with the final score
5. Disables the answer buttons

```javascript
// Toggle attributes visibility
function toggleAttributes() {
    // Skip if no character selected
    if (!currentCharacter) return;
    
    // Clear previous attributes
    elements.attributeList.innerHTML = '';

    // Add disposition
    const dispositionItem = document.createElement('li');
    dispositionItem.innerHTML = `Disposition: 
        <span class="${currentCharacter.disposition.toLowerCase()}">${currentCharacter.disposition}</span>`;
    elements.attributeList.appendChild(dispositionItem);

    // Add boolean attributes
    for (let attr of booleanAttributes) {
        const formattedAttr = attr
            .replace(/([A-Z])/g, ' $1') // Add space before capital letters
            .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
        
        const value = currentCharacter[attr];
        const item = document.createElement('li');
        item.innerHTML = `${formattedAttr}: 
        <span class="${value ? 'true' : 'false'}">${value ? 'Yes' : 'No'}</span>`;
        elements.attributeList.appendChild(item);
    }

    // Toggle display
    elements.attributesContainer.style.display = 
        elements.attributesContainer.style.display === 'none' ? 'block' : 'none';
}
```
This function toggles the visibility of the character attributes:
1. Returns early if no character is selected
2. Clears any previous attributes from the list
3. Adds the character's disposition to the list
4. For each boolean attribute:
   - Formats the attribute name (adds spaces before capital letters, capitalizes first letter)
   - Creates a list item showing the attribute name and value
   - Adds the list item to the attribute list
5. Toggles the display of the attributes container between 'block' and 'none'
# Character-Find-Game
