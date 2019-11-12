const suits = ["S", "H", "D", "C"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var playerCards = [];
var bankCards = [];

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
    var card = getRandomCard(createDeck());
    storeHands(who, card);
    createCard(createSrc(card), who);
}


function createSrc(card){

    let src="static/JPEG/"+card+".jpg";
    return src;
}

function createCard(src,who){

    var img=document.createElement("img");
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
function checkForCards(){

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



/*function addValueToCards(cards)
{
    var cardsDict{};
    var cardValueIndex = 0
    var cardValue;
    for (var i = 0 ; i < cards.length; i++) {
        if (cards[i][cardValueIndex] == "J" || cards[i][cardValueIndex][i] == "Q" || cards[i][cardValueIndex][i] == "K") {
            }
                cardValue = 10;
            }
        else if (cards[i][cardValueIndex == "A")
            {
                cardValue = 11;
            }
        else
            {
                cardValue = parseInt(cards[i][cardValueIndex])
            }
        cardsDict.push()

    }
}*/

function getRandomCard(deck)
{
    var randomCardIndex = getRandomNumber(0, 51);
    var card = deck[randomCardIndex]    ;
    return card;
}


