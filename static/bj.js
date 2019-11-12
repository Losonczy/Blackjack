function showCard(){
    createCard(createSrc(getRandomCard(deck)),'player1');
}

function createSrc(card){

    let src="static/JPEG/"+card+".jpg";
    return src;
}

function createCard(src,who){

    var img=document.createElement("img");
    img.src = src;
    img.style.display = "block";
    img.id="card";
    img.className='card';
    if (who=='player1'){
            document.getElementById('player_hand').appendChild(img);
    }
    else{
            document.getElementById('bank_hand').appendChild(img);
    }
}
function checkForCards(){

}

var suits = ["S", "H", "D", "C"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();
createDeck();

function createDeck()
{
	deck = new Array();
	for (var i = 0 ; i < values.length; i++)
	{
	    for(var x = 0; x < suits.length; x++)
	    {
		var card = values[i] + suits[x];
		deck.push(card);
	    }
	}
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

