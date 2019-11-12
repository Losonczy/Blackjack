function showCard(){
    createCard(createSrc(9,'C'));
}

function createSrc(value,color){

    let src="static/JPEG/"+value+color+".jpg";
    return src;
}

function createCard(src){

    var img=document.createElement("img");
    img.src = src;
    img.style.display = "block";
    img.id="card";
    document.getElementById('table').appendChild(img);

}
function checkForCards(,)

