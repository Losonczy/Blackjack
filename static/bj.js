const suits = ["S", "H", "D", "C"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let playerCards = [];
let bankCards = [];
var playerCardValues = [];
var bankCardValues = [];
const deck = createDeck()

function separateCardValues(allCardValues)
{
    playerCardValues = (allCardValues[0]);
    bankCardValues = (allCardValues[1]);
}


function storeHands(who, currentCard)
{
    if (who === "player")
    {
        playerCards.push(currentCard);
    }
    else
    {
        bankCards.push(currentCard);
    }
}

function dealStartingHand()
{
    showCard('bank');
    showCard('bank');
    showCard('player');
    showCard('player');

}


dealStartingHand();

function showCard(who){
    let card = getRandomCard(createDeck(), playerCards, bankCards);
    storeHands(who, card);
    createCard(createSrc(card), who);
}


function createSrc(card){

    let src="static/JPEG/"+card+".jpg";
    return src;
}

function createCard(src,who){

    let img = document.createElement("img");
    img.src = src;
    img.id="card";
    img.className='card';
    if (who=='player'){
            document.getElementById('player_hand').appendChild(img);
    }
    else{
            document.getElementById('bank_hand').appendChild(img);
    }
}


function createDeck()
{
    var deck = new Array();
	for (var i = 0 ; i < values.length; i++)
	{
	    for(var x = 0; x < suits.length; x++)
	    {
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


function valuesOfCards(playerCards, bankCards)
{
    let cardsOfPlayer = [];
    cardsOfPlayer.push(addingValues(playerCards));
    let cardsOfBank = [];
    cardsOfBank.push(addingValues(bankCards));
    let allHandCardValues = [cardsOfPlayer, cardsOfBank];
    return allHandCardValues
}


function addingValues(cards)
{
    let cardValues = [];
    let cardValueIndex = 0;
    let cardValue;
    for (var i = 0 ; i < cards.length; i++) {
        if (cards[i][cardValueIndex] === "J" || cards[i][cardValueIndex] === "Q" || cards[i][cardValueIndex] === "K") {
                cardValue = 10;
            }
        else if (cards[i][cardValueIndex] === "A")
            {
                cardValue = 11;
            }
        else if (cards[i][1] === "0")
        {
            cardValue = 10;
        }
        else
            {
                cardValue = parseInt(cards[i][cardValueIndex])
            }
        cardValues.push(cardValue);
    }
    return cardValues
}

function getRandomCard(deck, playerCards, bankCards)
{
    let randomCardIndex = getRandomNumber(0, 51);
    let card = deck[randomCardIndex]    ;
    while (playerCards.includes(card) || bankCards.includes(card))
    {
        randomCardIndex = getRandomNumber(0, 51)
        card = deck[randomCardIndex]
    }

    return card;
}

handCardValues = valuesOfCards(playerCards, bankCards)
separateCardValues(handCardValues);
console.log(playerCardValues);
console.log(bankCardValues);



