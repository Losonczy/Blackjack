function showCard(){
    createSrc(createCard(9,'C'));
}

function createSrc(value,color){

    let picture="static/JPEG/"+value+color+".jpg";
    return picture;
}

function createCard(src){

    var img=document.createElement("img");
    img.src = src;
    img.style.display = "block";
    img.id="card";
    document.getElementById('table').appendChild(img);

}

