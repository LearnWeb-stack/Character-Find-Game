# Roblox Character Guessing Game Tutorial

This tutorial covers how to build a character guessing game for Roblox characters using HTML, CSS, and JavaScript. The game works like "20 Questions" - the player thinks of a character, and the game tries to guess it by asking yes/no questions.

## Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [HTML Structure](#html-structure)
4. [CSS Styling](#css-styling)
5. [JavaScript Implementation](#javascript-implementation)
   - [Data Structures](#data-structures)
   - [DOM Elements](#dom-elements)
   - [Game Logic](#game-logic)
   - [Helper Functions](#helper-functions)
6. [How the Game Works](#how-the-game-works)
7. [Customization Tips](#customization-tips)

## Project Overview

This project creates an interactive web-based game where:
- Players think of a Roblox character
- The game asks a series of yes/no questions
- Based on answers, the game narrows down possible characters
- At the end, the game makes a guess about which character the player was thinking of

The game features:
- 25 Roblox characters with various attributes
- 19 carefully designed questions
- Dynamic UI that updates as questions are answered
- A visual progress bar showing elimination progress
- Character thumbnails that update as options are eliminated

## File Structure

The project consists of three main files:

```
index.html    - The HTML structure of the game
styles.css    - CSS styling for the game interface
script.js     - JavaScript logic for the game functionality
/images/      - Directory containing character images
```

## HTML Structure

The HTML file creates the structure for our game interface. Let's break down the key components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roblox Character Guessing Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Roblox Character Guesser</h1>
        
        <div class="card">
            <h2>Guess My Character</h2>
            <p>Think of a character and I'll try to guess it by asking questions. Answer Yes or No to each question.</p>
            
            <div class="card">
                <p>Characters remaining: <span id="characters-remaining">25</span></p>
                <div id="progress-container">
                    <div id="progress-bar"></div>
                </div>
                <p id="question-count">Question 0 of 19</p>
            </div>
            
            <div class="card">
                <p id="current-question">Press Start to begin!</p>
                <div id="game-result"></div>
                <div class="character-display" id="character-display" style="display: none;">
                    <img id="character-image" class="character-image" src="" alt="Character">
                    <p id="character-name" style="font-weight: bold; font-size: 18px;"></p>
                </div>
                <div class="controls">
                    <button id="start-game">Start Game</button>
                    <button id="answer-yes" style="display: none;">Yes</button>
                    <button id="answer-no" style="display: none;">No</button>
                    <button id="reset-game" style="display: none;">Reset Game</button>
                </div>
            </div>
            
            <div class="card" id="remaining-characters-container" style="display: none;">
                <h3>Possible Characters:</h3>
                <div id="remaining-characters" class="character-list"></div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

The HTML includes:
- A container for the entire game
- Cards for different sections of the interface
- Elements to display the current question, remaining characters, and game progress
- Buttons for user interaction (Start, Yes, No, Reset)
- A hidden section to display the final character guess with image

## CSS Styling

The CSS file defines the visual appearance of our game. Here's what it does:

```css
* {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}
body {
    margin: 0;
    padding: 20px;
    background-color: #f0f0f0;
    color: #333;
}
.container {
    max-width: 800px;
    margin: 0 auto;
}
h1, h2, h3 {
    margin-top: 0;
}
.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 15px;
    margin-bottom: 20px;
}
.controls {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
}
button {
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;
}
button:hover {
    transform: translateY(-2px);
}
button:active {
    transform: translateY(0);
}
#start-game {
    background-color: #4a89dc;
    color: white;
    font-weight: bold;
}
#answer-yes {
    background-color: #5cb85c;
    color: white;
}
#answer-no {
    background-color: #d9534f;
    color: white;
}
#reset-game {
    background-color: #f0ad4e;
    color: white;
}
.character-list {
    max-height: 300px;
    overflow-y: auto;
    margin-top: 10px;
}
.character-item {
    padding: 8px 12px;
    border-radius: 4px;
    margin-bottom: 5px;
    background-color: #f8f9fa;
    border-left: 3px solid #4a89dc;
    display: flex;
    align-items: center;
}
.character-item img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    object-fit: cover;
    border-radius: 4px;
}
#current-question {
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
}
#question-count {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-top: 5px;
}
#progress-container {
    height: 10px;
    background-color: #eee;
    border-radius: 5px;
    margin: 15px 0;
}
#progress-bar {
    height: 100%;
    width: 100%;
    background-color: #4a89dc;
    border-radius: 5px;
    transition: width 0.3s ease;
}
#game-result {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #4a89dc;
    margin: 20px 0;
    display: none;
}
.character-image {
    max-width: 200px;
    max-height: 200px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    margin: 10px auto;
    display: block;
}
.character-display {
    text-align: center;
    margin-top: 20px;
}
```

Key styling features include:
- Clean, modern card-based interface with subtle shadows
- Distinctive button colors for different actions
- Responsive layout that works on different screen sizes
- Animations for button interactions (hover and click effects)
- Progress bar that changes color as characters are eliminated
- Scrollable character list with thumbnails
- Attractive final character reveal display

## JavaScript Implementation

The JavaScript file contains all the game logic. Let's break it down into sections:

### Data Structures

First, the code defines two main data structures:

1. `characterData`: An array of character objects, each with:
   - Name
   - Image path
   - Attributes (key-value pairs of character traits)

2. `questions`: An array of question objects, each with:
   - Question text
   - The attribute name it asks about

Here's a sample of how these are structured:

```javascript
// Character data with images
const characterData = [
    { 
        name: "Bive", 
        image: "images/Bive.png", 
        attributes: { 
            "Multiple floor entry": true, 
            "Neutral": true, 
            "Normal Height": true, 
            "Roblox Avatar": true, 
            "Shares floors": true 
        }
    },
    // More characters...
];

// Questions for the guessing game
const questions = [
    { text: "Is the character's model a Roblox avatar?", attribute: "Roblox Avatar" },
    { text: "Does the character's model use a fancy mesh?", attribute: "Fancy Mesh" },
    // More questions...
];
```

### DOM Elements

Next, the code gets references to all the HTML elements it needs to manipulate:

```javascript
// DOM Elements
const startGameButton = document.getElementById('start-game');
const answerYesButton = document.getElementById('answer-yes');
const answerNoButton = document.getElementById('answer-no');
const resetGameButton = document.getElementById('reset-game');
const currentQuestionElement = document.getElementById('current-question');
const charactersRemainingElement = document.getElementById('characters-remaining');
const progressBar = document.getElementById('progress-bar');
const remainingCharactersContainer = document.getElementById('remaining-characters-container');
const remainingCharactersElement = document.getElementById('remaining-characters');
const questionCountElement = document.getElementById('question-count');
const gameResultElement = document.getElementById('game-result');
const characterDisplayElement = document.getElementById('character-display');
const characterImageElement = document.getElementById('character-image');
const characterNameElement = document.getElementById('character-name');
```

### Game Logic

The core game logic is implemented through several key functions:

#### Initialization

```javascript
// Initialize the application
function init() {
    // Initialize event listeners
    startGameButton.addEventListener('click', startGame);
    answerYesButton.addEventListener('click', () => answerQuestion(true));
    answerNoButton.addEventListener('click', () => answerQuestion(false));
    resetGameButton.addEventListener('click', resetGame);
    
    // Set initial state
    updateCharactersRemaining(characterData.length);
    updateProgressBar(100);
    
    // Initialize character images
    initializeCharacterImages();
}

// A single function to handle all character image mapping
function initializeCharacterImages() {
    // Define a single source of truth for character images
    const characterImages = {
        "Bive": "images/Bive.png",
        // More character images...
    };
    
    // Update all characters with their corresponding images
    characterData.forEach(character => {
        if (characterImages[character.name]) {
            character.image = characterImages[character.name];
        }
        // Keep the default image if no new image is provided
    });
}
```

#### Game Flow Control

```javascript
// Start a new guessing game
function startGame() {
    gameActive = true;
    remainingCharacters = [...characterData];
    askedQuestions = [];
    availableQuestions = [...questions];
    questionCount = 0;
    
    // Update UI
    startGameButton.style.display = 'none';
    answerYesButton.style.display = 'inline-block';
    answerNoButton.style.display = 'inline-block';
    resetGameButton.style.display = 'inline-block';
    remainingCharactersContainer.style.display = 'block';
    gameResultElement.style.display = 'none';
    characterDisplayElement.style.display = 'none';
    currentQuestionElement.style.display = 'block';
    
    // Ask the first question
    askNextQuestion();
}

// Reset the guessing game
function resetGame() {
    gameActive = false;
    remainingCharacters = [];
    askedQuestions = [];
    currentQuestion = null;
    questionCount = 0;
    
    // Update UI
    startGameButton.style.display = 'inline-block';
    answerYesButton.style.display = 'none';
    answerNoButton.style.display = 'none';
    resetGameButton.style.display = 'none';
    remainingCharactersContainer.style.display = 'none';
    gameResultElement.style.display = 'none';
    characterDisplayElement.style.display = 'none';
    currentQuestionElement.style.display = 'block';
    currentQuestionElement.textContent = 'Press Start to begin!';
    updateCharactersRemaining(characterData.length);
    updateProgressBar(100);
    questionCountElement.textContent = 'Question 0 of ' + questions.length;
}
```

#### Question Selection and Processing

```javascript
// Ask the next most efficient question
function askNextQuestion() {
    questionCount++;
    questionCountElement.textContent = 'Question ' + questionCount + ' of ' + questions.length;

    if (remainingCharacters.length === 1) {
        // We've found the character!
        gameActive = false;
        gameResultElement.style.display = 'block';
        gameResultElement.textContent = `I think your character is: ${remainingCharacters[0].name}!`;
        gameResultElement.style.color = '#5cb85c';
        currentQuestionElement.style.display = 'none';
        answerYesButton.style.display = 'none';
        answerNoButton.style.display = 'none';
        
        // Display the character image
        displayCharacter(remainingCharacters[0]);
        return;
    }
    
    // More conditions for end game...
    
    // Find the most efficient question (one that splits the remaining characters most evenly)
    const bestQuestion = findBestQuestion();
    currentQuestion = bestQuestion;
    
    // Remove the question from available questions
    availableQuestions = availableQuestions.filter(q => q !== bestQuestion);
    
    // Display the current question
    currentQuestionElement.textContent = bestQuestion.text;
    
    // Update UI
    updateGameStatus();
}

// Find the question that splits the remaining characters most evenly
function findBestQuestion() {
    let bestSplit = Number.MAX_SAFE_INTEGER;
    let bestQuestion = availableQuestions[0];
    
    availableQuestions.forEach(question => {
        // Count how many characters have this attribute
        const yesCount = remainingCharacters.filter(
            char => char.attributes[question.attribute]
        ).length;
        
        const noCount = remainingCharacters.length - yesCount;
        
        // Calculate how even the split is (smaller difference is better)
        const splitDifference = Math.abs(yesCount - noCount);
        
        if (splitDifference < bestSplit) {
            bestSplit = splitDifference;
            bestQuestion = question;
        }
    });
    
    return bestQuestion;
}

// Process the user's answer to a question
function answerQuestion(isYes) {
    if (!gameActive || !currentQuestion) return;
    
    // Filter remaining characters based on the answer
    remainingCharacters = remainingCharacters.filter(character => {
        const hasAttribute = character.attributes[currentQuestion.attribute] || false;
        return isYes ? hasAttribute : !hasAttribute;
    });
    
    // Add to asked questions
    askedQuestions.push({
        question: currentQuestion,
        answer: isYes
    });
    
    // Ask the next question
    askNextQuestion();
}
```

### Helper Functions

Several helper functions manage the UI updates:

```javascript
// Display the character's image and name
function displayCharacter(character) {
    characterImageElement.src = character.image;
    characterImageElement.alt = character.name;
    characterNameElement.textContent = character.name;
    characterDisplayElement.style.display = 'block';
}

// Update the game status display
function updateGameStatus() {
    updateCharactersRemaining(remainingCharacters.length);
    const percentRemaining = (remainingCharacters.length / characterData.length) * 100;
    updateProgressBar(percentRemaining);
    renderRemainingCharacters();
}

// Update characters remaining count
function updateCharactersRemaining(count) {
    charactersRemainingElement.textContent = count;
}

// Update the progress bar
function updateProgressBar(percentRemaining) {
    progressBar.style.width = `${percentRemaining}%`;
    
    // Change color based on progress
    if (percentRemaining > 70) {
        progressBar.style.backgroundColor = '#4a89dc'; // Blue
    } else if (percentRemaining > 30) {
        progressBar.style.backgroundColor = '#f0ad4e'; // Orange
    } else {
        progressBar.style.backgroundColor = '#5cb85c'; // Green
    }
}

// Render the list of remaining characters
function renderRemainingCharacters() {
    remainingCharactersElement.innerHTML = '';
    
    if (remainingCharacters.length === 0) {
        const noCharactersElement = document.createElement('div');
        noCharactersElement.className = 'character-item';
        noCharactersElement.textContent = 'No matching characters';
        remainingCharactersElement.appendChild(noCharactersElement);
        return;
    }
    
    remainingCharacters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.className = 'character-item';
        
        // Add thumbnail image
        const thumbnail = document.createElement('img');
        thumbnail.src = character.image;
        thumbnail.alt = character.name;
        characterElement.appendChild(thumbnail);
        
        // Add name
        const nameSpan = document.createElement('span');
        nameSpan.textContent = character.name;
        characterElement.appendChild(nameSpan);
        
        remainingCharactersElement.appendChild(characterElement);
    });
}
```

Finally, the script initializes when the DOM is fully loaded:

```javascript
// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    init();
});
```

## How the Game Works

1. **Initialization Phase**:
   - When the page loads, the game sets up all event listeners
   - The Start button is displayed, other controls are hidden
   - Character data and questions are loaded into memory

2. **Starting the Game**:
   - Player clicks "Start Game"
   - All characters are loaded as possibilities
   - The first question is selected based on which one will most evenly split the character set

3. **Question Selection Algorithm**:
   - For each question, the algorithm counts how many characters would match "Yes" vs "No"
   - It selects the question that creates the most balanced split (closest to 50/50)
   - This approach minimizes the number of questions needed to find the character

4. **Answering Questions**:
   - When the player answers a question, characters that don't match are eliminated
   - The remaining character count and progress bar update
   - The list of possible characters is refreshed with thumbnails
   - The next best question is selected

5. **Game Resolution**:
   - If only one character remains, the game declares it as the answer and shows its image
   - If no characters remain, the game indicates it couldn't find a match
   - If all questions are used but multiple characters remain, the game indicates it's unsure

## Customization Tips

You can customize this game by:

1. **Adding More Characters**:
   - Add new entries to the `characterData` array
   - Make sure to include all attributes used in questions
   - Add character images to the images folder

2. **Modifying Questions**:
   - Edit the `questions` array to add, remove, or change questions
   - Make sure each question references an attribute that exists in character data

3. **Changing the Visual Design**:
   - Adjust the CSS to modify colors, spacing, and appearance
   - The card-based design can be modified for different visual themes

4. **Extending Functionality**:
   - You could add difficulty levels by limiting question count
   - Add a hint system if players get stuck
   - Implement character categories or themes

This game demonstrates several important programming concepts:
- Data structures for organizing complex information
- Dynamic DOM manipulation
- Event-driven programming
- Algorithm design for efficient decision-making
- Responsive UI updates

By understanding how this game works, you can apply similar techniques to create your own interactive web applications!
