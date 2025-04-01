// Global variables
let AANTAL_HORIZONTAAL = 4;
let AANTAL_VERTICAAL = 3;
let AANTAL_KAARTEN = 6;

let gameBoard = document.getElementById('gameBoard');
let messageElement = document.getElementById('message');
let cards = [];
let flippedCards = [];
let isBusy = false;
let matchedPairs = 0;

// Image paths
const cardImages = [
    'kaart1.png',
    'kaart2.png',
    'kaart3.png',
    'kaart4.png',
    'kaart5.png',
    'kaart6.png'
];
const cardBackImage = 'achterkant.png';

// Initialize the game
function initGame() {
    // Create pairs of cards
    let cardValues = [];
    for (let i = 0; i < AANTAL_KAARTEN; i++) {
        cardValues.push(i);
        cardValues.push(i);
    }

    // Shuffle the cards (for final version)
    // For testing, you can comment this out to have cards in order
    cardValues = shuffleArray(cardValues);

    // Create the game board
    createGameBoard(cardValues);
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create the game board with cards
function createGameBoard(cardValues) {
    gameBoard.innerHTML = '';
    cards = [];

    for (let i = 0; i < cardValues.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-face', 'card-front');
        const frontImg = document.createElement('img');
        frontImg.src = cardImages[cardValues[i]];
        frontImg.alt = `Card ${cardValues[i] + 1}`;
        cardFront.appendChild(frontImg);

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-face', 'card-back');
        const backImg = document.createElement('img');
        backImg.src = cardBackImage;
        backImg.alt = 'Card back';
        cardBack.appendChild(backImg);

        card.appendChild(cardFront);
        card.appendChild(cardBack);

        card.addEventListener('click', () => flipCard(card, cardValues[i]));

        gameBoard.appendChild(card);
        cards.push({
            element: card,
            value: cardValues[i],
            flipped: false,
            matched: false
        });
    }
}

// Flip a card
function flipCard(cardElement, cardValue) {
    if (isBusy) return;

    const cardIndex = cards.findIndex(c => c.element === cardElement);
    const card = cards[cardIndex];

    if (card.flipped || card.matched) return;

    // Flip the card
    cardElement.classList.add('flipped');
    card.flipped = true;
    flippedCards.push(card);

    // Check for match
    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

// Check if flipped cards match
function checkForMatch() {
    isBusy = true;
    document.body.classList.add('busy');

    const [card1, card2] = flippedCards;

    if (card1.value === card2.value) {
        // Match found
        card1.element.classList.add('correct');
        card2.element.classList.add('correct');

        setTimeout(() => {
            card1.matched = true;
            card2.matched = true;
            card1.element.classList.add('matched');
            card2.element.classList.add('matched');
            card1.element.classList.remove('correct', 'flipped');
            card2.element.classList.remove('correct', 'flipped');

            flippedCards = [];
            isBusy = false;
            document.body.classList.remove('busy');

            matchedPairs++;
            checkGameEnd();
        }, 1000);
    } else {
        // No match
        card1.element.classList.add('wrong');
        card2.element.classList.add('wrong');

        setTimeout(() => {
            card1.element.classList.remove('flipped', 'wrong');
            card2.element.classList.remove('flipped', 'wrong');

            card1.flipped = false;
            card2.flipped = false;

            flippedCards = [];
            isBusy = false;
            document.body.classList.remove('busy');
        }, 1000);
    }
}

// Check if game has ended
function checkGameEnd() {
    if (matchedPairs === AANTAL_KAARTEN) {
        messageElement.textContent = 'Gefeliciteerd! Je hebt het spel gewonnen!';
    }
}

// Start the game
initGame();