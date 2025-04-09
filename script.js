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
    { 
        name: "Dr. Retro", 
        image: "images/DrRETRO.webp", 
        attributes: { 
            "Animal": true, 
            "Fancy Mesh": true, 
            "Hurts you": true, 
            "Less limbs": true, 
            "Neutral": true, 
            "Normal Height": true, 
            "Speaks": true 
        }
    },
    { 
        name: "Flesh Cousin", 
        image: "images/FleshCousin.webp", 
        attributes: { 
            "Human": true, 
            "Neutral": true, 
            "Normal Height": true, 
            "Roblox Avatar": true, 
            "Shares floors": true, 
            "Speaks": true, 
            "Wears Hat": true 
        }
    },
    { 
        name: "Folly", 
        image: "images/Folly.webp", 
        attributes: { 
            "Fancy Mesh": true, 
            "Rude": true, 
            "Speaks": true, 
            "Tall": true, 
            "Wears Hat": true 
        }
    },
    { 
        name: "Gnarpy", 
        image: "images/Gnarpy.webp", 
        attributes: { 
            "Animal": true, 
            "Fancy Mesh": true, 
            "Hurts you": true, 
            "More Limbs": true, 
            "Normal Height": true, 
            "Rude": true, 
            "Shares floors": true, 
            "Speaks": true 
        }
    },
    { 
        name: "Infected", 
        image: "images/Infected.webp", 
        attributes: { 
            "Human": true, 
            "Nice": true, 
            "Normal Height": true, 
            "Roblox Avatar": true, 
            "Shares floors": true 
        }
    },
    { 
        name: "Jermbo", 
        image: "images/Jermbo.webp", 
        attributes: { 
            "Animal": true, 
            "Doesnt Speak": true, 
            "Fancy Mesh": true, 
            "Multiple floor entry": true, 
            "Neutral": true, 
            "Normal Height": true, 
            "Shares floors": true 
        }
    },
    { 
        name: "Lampert", 
        image: "images/Lampert.webp", 
        attributes: { 
            "Neutral": true, 
            "Normal Height": true, 
            "Roblox Avatar": true 
        }
    },
    { 
        name: "Mach", 
        image: "images/Mach.webp", 
        attributes: { 
            "Human": true, 
            "Hurts you": true, 
            "Neutral": true, 
            "Roblox Avatar": true, 
            "Shares floors": true, 
            "Speaks": true, 
            "Tall": true, 
            "Wears Hat": true 
        }
    },
    { 
        name: "Mark", 
        image: "images/ManMark.webp", 
        attributes: { 
            "Hurts you": true, 
            "Less limbs": true, 
            "Neutral": true, 
            "Normal Height": true, 
            "Roblox Avatar": true, 
            "Speaks": true, 
            "Wears Hat": true 
        }
    },
    { 
        name: "Melanie", 
        image: "images/Melanie.webp", 
        attributes: { 
            "Fancy Mesh": true, 
            "Multiple floor entry": true, 
            "Nice": true, 
            "Normal Height": true, 
            "Shares floors": true 
        }
    },
    { 
        name: "Mozzele", 
        image: "images/Mozzele.webp", 
        attributes: { 
            "Animal": true, 
            "Multiple floor entry": true, 
            "Nice": true, 
            "Normal Height": true, 
            "Shares floors": true 
        }
    },
    { 
        name: "Mr", 
        image: "images/Mr.webp", 
        attributes: { 
            "Doesnt Speak": true, 
            "Hurts you": true, 
            "Less limbs": true, 
            "Normal Height": true, 
            "Rude": true 
        }
    },
    { 
        name: "Null", 
        image: "images/NULL.webp", 
        attributes: { 
            "Human": true, 
            "Neutral": true, 
            "Normal Height": true, 
            "Roblox Avatar": true, 
            "Speaks": true, 
            "Wears Hat": true 
        }
    },
    { 
        name: "Party Noob", 
        image: "images/Poob.webp", 
        attributes: { 
            "Gives Effect": true, 
            "Human": true, 
            "Hurts you": true, 
            "Neutral": true, 
            "Normal Height": true, 
            "Roblox Avatar": true, 
            "Shares floors": true, 
            "Speaks": true 
        }
    },
    { 
        name: "Pest", 
        image: "images/Pest.webp", 
        attributes: { 
            "Human": true, 
            "Normal Height": true, 
            "Roblox Avatar": true, 
            "Rude": true, 
            "Shares floors": true, 
            "Speaks": true, 
            "Wears Hat": true 
        }
    },
    { 
        name: "Pillby", 
        image: "images/Pillby.webp", 
        attributes: { 
            "Animal": true, 
            "More Limbs": true, 
            "Neutral": true, 
            "Normal Height": true, 
            "Roblox Avatar": true, 
            "Shares floors": true, 
            "Speaks": true, 
            "Wears Hat": true 
        }
    },
    { 
        name: "Prototype", 
        image: "images/Prototype.webp", 
        attributes: { 
            "Fancy Mesh": true, 
            "Nice": true, 
            "Normal Height": true, 
            "Robot": true 
        }
    },
    { 
        name: "Reddy", 
        image: "images/Reddy.webp", 
        attributes: { 
            "Hurts you": true, 
            "Multiple floor entry": true, 
            "Neutral": true, 
            "Roblox Avatar": true, 
            "Robot": true, 
            "Shares floors": true, 
            "Speaks": true, 
            "Tall": true 
        }
    },
    { 
        name: "Scag", 
        image: "images/Scag.webp", 
        attributes: { 
            "Fancy Mesh": true, 
            "Less limbs": true, 
            "Nice": true, 
            "Normal Height": true, 
            "Robot": true 
        }
    },
    { 
        name: "Split", 
        image: "images/Split.webp", 
        attributes: { 
            "Animal": true, 
            "Gives Effect": true, 
            "More Limbs": true, 
            "Nice": true, 
            "Normal Height": true, 
            "Roblox Avatar": true, 
            "Speaks": true 
        }
    },
    { 
        name: "Spud", 
        image: "images/Spud.webp", 
        attributes: { 
            "Human": true, 
            "Less limbs": true, 
            "Neutral": true, 
            "Normal Height": true, 
            "Roblox Avatar": true, 
            "Shares floors": true, 
            "Speaks": true, 
            "Wears Hat": true 
        }
    },
    { 
        name: "Stat", 
        image: "images/STAT.webp", 
        attributes: { 
            "Fancy Mesh": true, 
            "Human": true, 
            "Neutral": true, 
            "Normal Height": true, 
            "Speaks": true, 
            "Wears Hat": true 
        }
    },
    { 
        name: "Unpleasant", 
        image: "images/Unpleasant.webp", 
        attributes: { 
            "Doesnt Speak": true, 
            "Fancy Mesh": true, 
            "Less limbs": true, 
            "Normal Height": true, 
            "Rude": true, 
            "Shares floors": true 
        }
    },
    { 
        name: "Walter", 
        image: "images/Wallter.webp", 
        attributes: { 
            "Fancy Mesh": true, 
            "Gives Effect": true, 
            "Tall": true 
        }
    }
];

// Questions for the guessing game
const questions = [
    { text: "Is the character's model a Roblox avatar?", attribute: "Roblox Avatar" },
    { text: "Does the character's model use a fancy mesh?", attribute: "Fancy Mesh" },
    { text: "Does the character share a floor with another character?", attribute: "Shares floors" },
    { text: "Can the character enter the elevator from more than one floor?", attribute: "Multiple floor entry" },
    { text: "Does the character act nice?", attribute: "Nice" },
    { text: "Does the character act neutral?", attribute: "Neutral" },
    { text: "Does the character act rude?", attribute: "Rude" },
    { text: "Does the character have MORE than 4 limbs?", attribute: "More Limbs" },
    { text: "Does the character have LESS than 4 limbs?", attribute: "Less limbs" },
    { text: "Is the character a human?", attribute: "Human" },
    { text: "Is the character a robot?", attribute: "Robot" },
    { text: "Is the character an animal?", attribute: "Animal" },
    { text: "Is the character at a normal height?", attribute: "Normal Height" },
    { text: "Is the character tall?", attribute: "Tall" },
    { text: "Can the character speak?", attribute: "Speaks" },
    { text: "Does the character give a special effect when throwing red petals at them?", attribute: "Gives Effect" },
    { text: "Can the character hurt you in the elevator?", attribute: "Hurts you" },
    { text: "Does the character wear a hat or a head accessory?", attribute: "Wears Hat" },
    { text: "Does the character not speak?", attribute: "Doesnt Speak" }
];

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

// Game state
let gameActive = false;
let remainingCharacters = [];
let askedQuestions = [];
let currentQuestion = null;
let availableQuestions = [];
let questionCount = 0;

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
        "Dr. Retro": "images/DrRETRO.webp",
        "Flesh Cousin": "images/FleshCousin.webp", 
        "Folly": "images/Folly.webp",
        "Gnarpy": "images/Gnarpy.webp",
        "Infected": "images/Infected.webp",
        "Jermbo": "images/Jermbo.webp",
        "Lampert": "images/Lampert.webp",
        "Mach": "images/Mach.webp",
        "Mark":"images/ManMark.webp",
        "Melanie": "images/Melanie.webp",
        "Mozzele": "images/Mozzele.webp",
        "Mr": "images/Mr.png",
        "Null": "images/NULL.png",
        "Party Noob": "images/Poob.webp",
        "Pest": "images/Pest.webp",
        "Pillby": "images/Pillby.webp",
        "Prototype": "images/Prototype.webp",
        "Reddy": "images/Reddy.webp",
        "Scag": "images/Scag.webp",
        "Split": "images/Split.webp",
        "Spud": "images/Spud.webp",
        "Stat": "images/STAT.webp",
        "Unpleasant": "images/Unpleasant.webp",
        "Walter": "images/Wallter.webp"

        

        // Add more characters as needed
    };
    
    // Update all characters with their corresponding images
    characterData.forEach(character => {
        if (characterImages[character.name]) {
            character.image = characterImages[character.name];
        }
        // Keep the default image if no new image is provided
    });
}

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
    
    if (remainingCharacters.length === 0) {
        // No characters match the criteria
        gameActive = false;
        gameResultElement.style.display = 'block';
        gameResultElement.textContent = "I don't know any character that matches all your answers!";
        gameResultElement.style.color = '#d9534f';
        currentQuestionElement.style.display = 'none';
        answerYesButton.style.display = 'none';
        answerNoButton.style.display = 'none';
        return;
    }
    
    if (availableQuestions.length === 0) {
        // Ran out of questions but still have multiple characters
        gameActive = false;
        gameResultElement.style.display = 'block';
        gameResultElement.textContent = `I'm not sure between these ${remainingCharacters.length} characters!`;
        gameResultElement.style.color = '#f0ad4e';
        currentQuestionElement.style.display = 'none';
        answerYesButton.style.display = 'none';
        answerNoButton.style.display = 'none';
        return;
    }
    
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

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    init();
});