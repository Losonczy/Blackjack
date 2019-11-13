const suits = ["S", "H", "D", "C"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let playerCards = [];
let bankCards = [];
var playerCardValues = [];
var bankCardValues = [];
const deck = createDeck()
var turn='player'

//let hit=document.getElementById('hit-btn').addEventListener('click', hit())
//document.getElementById('stay-btn').addEventListener('click', endTurn())

function separateCardValues(allCardValues)
{
    playerCardValues = (allCardValues[1]);
    bankCardValues = (allCardValues[0]);
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
function hit() {
    console.log('hit');
    showCard('player');
    console.log(summCardValues(bankCardValues));
}


function showCard(who){
    let card = getRandomCard(createDeck(), playerCards, bankCards);
    storeHands(who, card);
    createCard(createSrc(card), who);
    //store values
    handCardValues = valuesOfCards(playerCards, bankCards);
    separateCardValues(handCardValues);
    //store values
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

function endTurn(){
    let new_button=document.getElementById('hit-btn');
    new_button.onclick="";
}

function startTurn() {
    document.querySelector('.player_hand').innerHTML="";
    document.querySelector('.bank_hand').innerHTML="";
    dealStartingHand();
    //let new_button=document.querySelector('.controls');
    //new_button.firstChild.addEventListener('click',hit())
}

/*function round(){

    dealStartingHand();
    turn='player';
    while(turn==='player') {
        document.getElementById('hit-btn').addEventListener('click', showCard('player'))
        document.getElementById('stay-btn').addEventListener('click', endTurn())
    }
    document.getElementById('hit-btn').removeEventListener('click',showCard('player'))
    document.getElementById('stay-btn').removeEventListener('click',endTurn())
}*/

function summCardValues(hand) {
    console.log(hand);
    let summ=1;
    for(let i of hand){
        console.log(i + 'this');
        summ= eval(summ) + eval(i);
    }
    return summ;
}



startTurn();
handCardValues = valuesOfCards(playerCards, bankCards);
separateCardValues(handCardValues);
console.log(playerCardValues);
console.log(bankCardValues);



