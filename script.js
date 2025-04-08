// Character database - simplified structure
const characters = [
    { 
        name: "Split", 
        image: "images/Split.webp",
        disposition: "Nice", 
        avatar: true,
        fancyMesh: false,
        sharesFloors: false, 
        multipleFloorEntry: false, 
        moreLimbs: true, 
        lessLimbs: false,
        normalHeight: true,
        tall: false,
        human: false, 
        robot: false,
        animal: true, 
        speaks: true, 
        wearsHat: false,
        hurtsYou: false,
        givesEffect: true, 
        doesntSpeak: false 
    },
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
    { 
        name: "Pilby", 
        image: "images/Reddy.webp",
        disposition: "Rude", 
        avatar: false, 
        fancyMesh: true, 
        sharesFloors: false, 
        multipleFloorEntry: false, 
        moreLimbs: true, 
        lessLimbs: false, 
        normalHeight: false,
        tall: false, 
        human: false, 
        robot: false, 
        animal: true, 
        speaks: false, 
        wearsHat: false, 
        hurtsYou: false, 
        givesEffect: true, 
        doesntSpeak: true 
    },
    { 
        name: "Party Noob", 
        image: "images/Poob.webp", 
        disposition: "Neutral", 
        avatar: false, 
        fancyMesh: false, 
        sharesFloors: false, 
        multipleFloorEntry: false, 
        moreLimbs: false, 
        lessLimbs: false, 
        normalHeight: false, 
        tall: false, 
        human: true, 
        robot: false, 
        animal: false, 
        speaks: true, 
        wearsHat: false, 
        hurtsYou: false, 
        givesEffect: false, 
        doesntSpeak: false 
    },
    { 
        name: "Pest", 
        image: "images/Pest.webp", 
        disposition: "Neutral", 
        avatar: false, 
        fancyMesh: false, 
        sharesFloors: false, 
        multipleFloorEntry: false, 
        moreLimbs: false, 
        lessLimbs: false, 
        normalHeight: false,
        tall: false,
        human: false, 
        robot: false, 
        animal: true, 
        speaks: false,
        wearsHat: false, 
        hurtsYou: false, 
        givesEffect: false, 
        doesntSpeak: false
    },
    { 
        name: "Null", 
        image: "images/NULL.webp", 
        disposition: "Neutral", 
        avatar: false, 
        fancyMesh: false, 
        sharesFloors: false, 
        multipleFloorEntry: false, 
        moreLimbs: false, 
        lessLimbs: false,
        normalHeight: false, 
        tall: false, 
        human: false, 
        robot: true, 
        animal: false, 
        speaks: false, 
        wearsHat: false, 
        hurtsYou: false, 
        givesEffect: false, 
        doesntSpeak: true 
    },
    { 
        name: "Gnarpy",
        image: "images/Gnarpy.webp", 
        disposition: "Nice", 
        avatar: false, 
        fancyMesh: false, 
        sharesFloors: false, 
        multipleFloorEntry: false, 
        moreLimbs: false, 
        lessLimbs: false, 
        normalHeight: false, 
        tall: false, 
        human: false, 
        robot: false, 
        animal: true, 
        speaks: false, 
        wearsHat: true, 
        hurtsYou: false, 
        givesEffect: false, 
        doesntSpeak: true  
    },
    { 
        name: "Melaine", 
        image: "images/Melanie.webp",
        disposition: "Neutral", 
        avatar: false, 
        fancyMesh: false, 
        sharesFloors: true, 
        multipleFloorEntry: true, 
        moreLimbs: false, 
        lessLimbs: false, 
        normalHeight: true, 
        tall: false, 
        human: true, 
        robot: false, 
        animal: false, 
        speaks: true, 
        wearsHat: false, 
        hurtsYou: false, 
        givesEffect: false, 
        doesntSpeak: false
    },
    { 
        name: "Bive", 
        image: "images/Bive.webp", 
        disposition: "Neutral",
        avatar: false, 
        fancyMesh: false, 
        sharesFloors: false, 
        multipleFloorEntry: false, 
        moreLimbs: false, 
        lessLimbs: false,
        normalHeight: false, 
        tall: false, 
        human: true, 
        robot: false, 
        animal: false, 
        speaks: true, 
        wearsHat: false, 
        hurtsYou: false, 
        givesEffect: false, 
        doesntSpeak: false 
    },
    { 
        name: "Lampert", 
        image: "images/Lampert.webp", 
        disposition: "Rude", 
        avatar: false, 
        fancyMesh: false, 
        sharesFloors: false, 
        multipleFloorEntry: false,
        moreLimbs: false, 
        lessLimbs: false, 
        normalHeight: false,
        tall: false, 
        human: true, 
        robot: false, 
        animal: false, 
        speaks: true,
        wearsHat: false,
        hurtsYou: false,
        givesEffect: false, 
        doesntSpeak: false 
    },
    { 
        name: "Mark", 
        image: "images/ManMark.webp",
        disposition: "Rude", 
        avatar: false,
        fancyMesh: false,
        sharesFloors: false, 
        multipleFloorEntry: false, 
        moreLimbs: false, 
        lessLimbs: false,
        normalHeight: false,
        tall: false,
        human: true, 
        robot: false,
        animal: false, 
        speaks: true, 
        wearsHat: false,
        hurtsYou: false,
        givesEffect: false, 
        doesntSpeak: false 
    }
];

// Questions for the game
const questions = [
    { question: "Is the character's model use a roblox avatar?", attribute: "avatar" },
    { question: "Does the character's model use a fancy mesh?", attribute: "fancyMesh" },
    { question: "Does the character share a floor with another character?", attribute: "sharesFloors" },
    { question: "Can the character enter the elevator from more than one floor?", attribute: "multipleFloorEntry" },
    { question: "Does the Character act nice?", attribute: "disposition", value: "Nice" },
    { question: "Does the Character act neutral?", attribute: "disposition", value: "Neutral" },
    { question: "Does the Character act rude?", attribute: "disposition", value: "Rude" },
    { question: "Does the character have MORE than 4 limbs?", attribute: "moreLimbs" },
    { question: "Does the character have LESS than 4 limbs?", attribute: "lessLimbs" },
    { question: "Is the character a Human?", attribute: "human" },
    { question: "Is the Character a Robot?", attribute: "robot" },
    { question: "Is the character an Animal?", attribute: "animal" },
    { question: "Is the character at a normal height?", attribute: "normalHeight" },
    { question: "Can the character speak?", attribute: "speaks" },
    { question: "Does the Character give a special effect when throwing red petals at them?", attribute: "givesEffect" },
    { question: "Can the Character hurt you in the elevator?", attribute: "hurtsYou" },
    { question: "Does the character wear a hat or a head accessory?", attribute: "wearsHat" },
    { question: "Is the character tall?", attribute: "tall" }
];

// List of boolean attributes for display
const booleanAttributes = [
    "avatar", "fancyMesh", "sharesFloors", "multipleFloorEntry", 
    "moreLimbs", "lessLimbs", "normalHeight", "tall", 
    "human", "robot", "animal", "speaks", 
    "wearsHat", "hurtsYou", "givesEffect", "doesntSpeak"
];

// Game state
let character;
let askedQuestions = [];
let score = 0;
let currentQuestion = -1;
let isGameActive = true;
let maxQuestions = 19;

// Get DOM elements
const characterImage = document.getElementById('characterImage');
const characterName = document.getElementById('characterName');
const characterDisposition = document.getElementById('characterDisposition');
const questionText = document.getElementById('question');
const scoreDisplay = document.getElementById('currentScore');
const totalDisplay = document.getElementById('totalQuestions');
const resultSection = document.getElementById('resultSection');
const resultText = document.getElementById('resultText');
const attributesContainer = document.getElementById('attributesContainer');
const attributeList = document.getElementById('attributeList');
const gameEndScreen = document.getElementById('gameEnd');
const finalScoreDisplay = document.getElementById('finalScore');
const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');
const showAttributesButton = document.getElementById('showAttributesBtn');
const newGameButton = document.getElementById('newGameBtn');

// Start the game when page loads
window.addEventListener('DOMContentLoaded', function() {
    // Set up button click handlers
    yesButton.addEventListener('click', function() {
        checkAnswer(true);
    });

    noButton.addEventListener('click', function() {
        checkAnswer(false);
    });

    showAttributesButton.addEventListener('click', function() {
        showHideAttributes();
    });

    newGameButton.addEventListener('click', function() {
        startGame();
    });

    // Start first game
    startGame();
});

// Initialize a new game
function startGame() {
    // Reset game state
    askedQuestions = [];
    score = 0;
    isGameActive = true;

    // Pick random character
    const randomIndex = Math.floor(Math.random() * characters.length);
    character = characters[randomIndex];
    
    // Reset display
    characterImage.src = "images/character-find.webp";
    characterName.textContent = "???";
    characterDisposition.textContent = "";
    scoreDisplay.textContent = "0";
    totalDisplay.textContent = "0";

    // Hide sections
    resultSection.style.display = 'none';
    gameEndScreen.style.display = 'none';
    attributesContainer.style.display = 'none';

    // Enable buttons
    yesButton.disabled = false;
    noButton.disabled = false;

    // Ask first question
    getNextQuestion();
}

// Show the next question
function getNextQuestion() {
    // Check if we've reached the question limit
    if (askedQuestions.length >= maxQuestions) {
        endGame();
        return;
    }

    // Find questions we haven't asked yet
    const availableQuestions = [];
    for (let i = 0; i < questions.length; i++) {
        if (!askedQuestions.includes(i)) {
            availableQuestions.push(i);
        }
    }

    // End game if no more questions
    if (availableQuestions.length === 0) {
        endGame();
        return;
    }

    // Pick random question from available ones
    const randomIdx = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[randomIdx];
    askedQuestions.push(currentQuestion);

    // Show question
    questionText.textContent = questions[currentQuestion].question;
    totalDisplay.textContent = askedQuestions.length;
}

// Check if answer is correct
function checkAnswer(answer) {
    if (!isGameActive) return;

    // Get current question details
    const question = questions[currentQuestion];
    let correct = false;

    // Check if answer matches character attribute
    if (question.attribute === "disposition") {
        // For disposition questions, we check if the answer matches whether
        // the character's disposition equals the question's value
        correct = (answer === (character.disposition === question.value));
    } else {
        // For other questions, we directly check if the answer matches the attribute value
        correct = (answer === character[question.attribute]);
    }

    // Update score if correct
    if (correct) {
        score++;
        scoreDisplay.textContent = score;
    }
    
    // Get next question
    getNextQuestion();
}

// End the game and show results
function endGame() {
    isGameActive = false;

    // Show character info
    characterName.textContent = character.name;
    characterDisposition.innerHTML = 
        `<span class="${character.disposition.toLowerCase()}">${character.disposition}</span>`;
    
    // Show character image - ensure it displays the correct character
    characterImage.src = character.image;
    
    // Log character info for debugging
    console.log("Game ended with character:", character.name);

    // Show end screen
    gameEndScreen.style.display = 'block';
    finalScoreDisplay.textContent = `You scored: ${score}/${askedQuestions.length}`;

    // Disable answer buttons
    yesButton.disabled = true;
    noButton.disabled = true;
}

// Toggle attribute list visibility
function showHideAttributes() {
    if (!character) return;
    
    // Clear previous attributes
    attributeList.innerHTML = '';

    // Add disposition
    const dispItem = document.createElement('li');
    dispItem.innerHTML = `Disposition: 
        <span class="${character.disposition.toLowerCase()}">${character.disposition}</span>`;
    attributeList.appendChild(dispItem);

    // Add all other attributes
    for (let attr of booleanAttributes) {
        // Format attribute name for display
        let attrName = attr.charAt(0).toUpperCase() + attr.slice(1);
        // Add spaces before capital letters
        attrName = attrName.replace(/([A-Z])/g, ' $1');
        
        const value = character[attr];
        const item = document.createElement('li');
        item.innerHTML = `${attrName}: 
            <span class="${value ? 'true' : 'false'}">${value ? 'Yes' : 'No'}</span>`;
        attributeList.appendChild(item);
    }

    // Toggle visibility
    if (attributesContainer.style.display === 'none') {
        attributesContainer.style.display = 'block';
    } else {
        attributesContainer.style.display = 'none';
    }
}