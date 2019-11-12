function showCard(){
    createCard(createSrc(9,'C'),'player1');
}

function createSrc(value,color){

    let src="static/JPEG/"+value+color+".jpg";
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


