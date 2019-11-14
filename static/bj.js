const suits = ["S", "H", "D", "C"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let playerCards = [];
let bankCards = [];
var playerCardValues = [];
var bankCardValues = [];
const deck = createDeck();
var turn = 'player';
let intOfPlayerCards = [];
let intOfBankCards = [];
let sumValuesOfBank = 0;
let sumValuesOfPlayer = 0;
let numOfAcesInPlayer = 0;

function getIntFromObject(cards) {
    let intArray = [];
    for (let i = 0; i < cards.length; i++) {
        intArray.push(parseInt(cards[i]));
    }
    return intArray;

}

function storeHands(who, currentCard) {
    if (who === "player") {
        playerCards.push(currentCard);
    } else {
        bankCards.push(currentCard);
    }
}

function dealStartingHand() {
    showCard('bank');
    showCard('bank');
    showCard('player');
    showCard('player');

}

function hit() {
    showCard('player');
    console.log(intOfPlayerCards);
    console.log(intOfBankCards);
    console.log(typeof intOfPlayerCards[2]);
}


function showCard(who) {
    let card = getRandomCard(createDeck(), playerCards, bankCards);
    storeHands(who, card);
    createCard(createSrc(card), who);
    //store values
    playerCardValues = addValuesOfCards(playerCards);
    bankCardValues = addValuesOfCards(bankCards);
    intOfBankCards = getIntFromObject(bankCardValues);
    intOfPlayerCards = getIntFromObject(playerCardValues);
    sumValuesOfPlayer = getSumValues(intOfPlayerCards);
    sumValuesOfBank = getSumValues(intOfBankCards);
    console.log(sumValuesOfPlayer);
    if (sumValuesOfPlayer > 21)
    {
        changeAceToOne(intOfPlayerCards);
    }
    sumValuesOfPlayer = getSumValues(intOfPlayerCards);
    console.log(sumValuesOfPlayer);
    //store values
}


function createSrc(card) {

    let src = "static/JPEG/" + card + ".jpg";
    return src;
}

function createCard(src, who) {

    let img = document.createElement("img");
    img.src = src;
    img.id = "card";
    img.className = 'card';
    if (who == 'player') {
        document.getElementById('player_hand').appendChild(img);
    } else {
        document.getElementById('bank_hand').appendChild(img);
    }
}


function createDeck() {
    var deck = new Array();
    for (var i = 0; i < values.length; i++) {
        for (var x = 0; x < suits.length; x++) {
            var card = values[i] + suits[x];
            deck.push(card);
        }
    }
    return deck;
}

function getRandomNumber(start, range) {
    let getRandom = Math.floor((Math.random() * range) + start);
    while (getRandom > range) {
        getRandom = Math.floor((Math.random() * range) + range);
    }
    return getRandom
}


function addValuesOfCards(cards) {
    let valueOfCards = [];
    let cardsWithValues = addingValues(cards);
    for (let i = 0; i < cardsWithValues.length; i++) {
        valueOfCards.push(cardsWithValues[i]);
    }
    return valueOfCards;
}


function addingValues(cards) {
    let cardValues = [];
    let cardValueIndex = 0;
    let cardValue;
    for (var i = 0; i < cards.length; i++) {
        if (cards[i][cardValueIndex] === "J" || cards[i][cardValueIndex] === "Q" || cards[i][cardValueIndex] === "K") {
            cardValue = 10;
        } else if (cards[i][cardValueIndex] === "A") {
            cardValue = 11;
        } else if (cards[i][1] === "0") {
            cardValue = 10;
        } else {
            cardValue = parseInt(cards[i][cardValueIndex])
        }
        cardValues.push(cardValue);
    }
    return cardValues
}

function getRandomCard(deck, playerCards, bankCards) {
    let randomCardIndex = getRandomNumber(0, 51);
    let card = deck[randomCardIndex];
    while (playerCards.includes(card) || bankCards.includes(card)) {
        randomCardIndex = getRandomNumber(0, 51)
        card = deck[randomCardIndex]
    }

    return card;
}

function endTurn() {
    let new_button = document.getElementById('hit-btn');
    new_button.onclick = "";
    new_button = document.getElementById('stay-btn');
    new_button.onclick = "";
    let a = true;
    while (a === true) {
        showCard('bank');
        a = false;
    }
    startTurn();

}

function startTurn() {

    document.querySelector('.player_hand').innerHTML = "";
    document.querySelector('.bank_hand').innerHTML = "";
    dealStartingHand();
    getValueOfCards();
    let new_button = document.getElementById('stay-btn');
    new_button.onclick = endTurn;
    new_button = document.getElementById('hit-btn');
    new_button.onclick = hit;
}


function getSumValues(hand)
{
    let sum = 0;
    for (let i = 0; i < hand.length; i++)
    {
        sum += hand[i];
    }
    return sum;
}

function changeAceToOne(hand, numOfAcesInPlayer)
{
    for (let i = 0; i < hand.length; i++)
    {
        if (hand[i] === 11)
        {
            hand[i] = 1;
            numOfAcesInPlayer += 1;
            console.log(hand[i]);
        }
    }
}


startTurn();
playerCardValues = addValuesOfCards(playerCards);
bankCardValues = addValuesOfCards(bankCards);
intOfPlayerCards = getIntFromObject(playerCardValues);
intOfBankCards = getIntFromObject(bankCardValues);
let sumBank = summCardValues(intOfBankCards);
let sumPlayer = summCardValues(intOfPlayerCards);

