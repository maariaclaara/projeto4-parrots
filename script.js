/*inicio do jogo*/

let numberCards = Number ( prompt('Quantas cartas você quer? (Número par entre 4 e 14)') );

while (( numberCards < 4 || numberCards > 14 || (numberCards % 2) !== 0)){
    numberCards = Number ( prompt('Quantas cartas você quer? (Número par entre 4 e 14)') );
}


/*distribuir cartas*/

const imgCards = [
"./imagem/carta1.gif" ,
"./imagem/carta1.gif" ,
"./imagem/carta2.gif" ,
"./imagem/carta2.gif" ,
"./imagem/carta3.gif" ,
"./imagem/carta3.gif" ,
"./imagem/carta4.gif" ,
"./imagem/carta4.gif" ,
"./imagem/carta5.gif" ,
"./imagem/carta5.gif" ,
"./imagem/carta6.gif" ,
"./imagem/carta6.gif" ,
"./imagem/carta7.gif" ,
"./imagem/carta7.gif" ,
];

const cards = [];

function comparador() { 
	return Math.random() - 0.5; 
}

function addCards(){

    for(let i = 0; i < numberCards; i++){
        cards[i] = imgCards[i];
    }

    cards.sort(comparador);

    for(let i = 0; i < numberCards; i++){
        const containerCards = document.querySelector(".content");

        containerCards.innerHTML = containerCards.innerHTML + `
            <div data-test="card" onclick="checkCard(this)" class="card">
                <div class="front-face face">
                    <img data-test="face-down-image" src="./imagem/back.png" class="img" />
                </div> 
                <div class="back-face face">
                    <img data-test="face-up-image" src="${cards[i]}" class="img" />
                </div> 
            </div> ` ;
    }    
}

addCards();


/*igualdade e diferença do par de cartas*/

let moves = 0;
let pair = 0;
let faceCards = 0;
let imgCard = "";

function checkPair (image, card ) {

    if (image.querySelector('img').src === card.querySelector('back-face>img').src){
        
        pair++;
        faceCards = 0;
        imgCard = "";

    } else if (image.querySelector('image').src !== card.querySelector('back-face>img').src){
    
        imgCard = "";
        image.parentElement.classList.remove('turn');
        card.parentElement.classList.remove('turn');
        faceCards = 0;
    
    } if (pair === (numberCards / 2)){
        prompt ('Você ganhou em $(moves) jogadas!')
    }
}


/*virar carta*/

function checkCard(click){

    if ((click.classList.contains('turn') === false) && faceCards === 0){
        click.classList.add('turn');
        imgCard = click.querySelector('.back-face');
        moves++;
        faceCards++;
        
    } else if ((click.classList.contains('turn') === false) && faceCards === 1){
        click.classList.add('turn');
        moves++;
        faceCards++;
        setTimeout(checkPair, 1000, imgCard, click);
    } 
}










   







