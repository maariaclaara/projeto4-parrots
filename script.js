const imgCards = [
    "./imagem/carta1.gif" ,
    "./imagem/carta2.gif" ,
    "./imagem/carta3.gif" ,
    "./imagem/carta4.gif" ,
    "./imagem/carta5.gif" ,
    "./imagem/carta6.gif" ,
    "./imagem/carta7.gif" ,
    ];

const cards = [];

let cardPairs = [];

let selectCard = null;

let Letters = null;

let Pairs = null;

let Status = false;

let rounds = 0;


/*distribuir cartas*/

function addCards(){

    let numberCards = Number ( prompt('Quantas cartas você quer? (Número par entre 4 e 14)') );

    while (( numberCards < 4 || numberCards > 14 || (numberCards % 2) !== 0)){
    numberCards = Number ( prompt('Quantas cartas você quer? (Número par entre 4 e 14)') );
    }

    imgCards.sort(comparador);

    for(let i = 0; i < (numberCards / 2); i++){
        cards.push(imgCards[i], imgCards[i]);
    }

    Pairs = numberCards / 2;
    cards.sort(comparador);

    for(let i = 0; i < numberCards; i++){
        const containerCards = document.querySelector(".content");

        containerCards.innerHTML = containerCards.innerHTML + `
            <div data-test="card" onclick="flipCards(this)" class="card">
                <div class="front-face face">
                    <img data-test="face-down-image" src="./imagem/back.png" class="img" />
                </div> 
                <div class="back-face face">
                    <img data-test="face-up-image" src="${cards[i]}"  class="img" />
                </div> 
            </div> ` ;
    } ; 
};


function comparador() { 
	return Math.random() - 0.5; 
};



/*virar carta*/


function flipCards(showThis) {

    const Back = showThis.querySelector('.back-face');


    if (Back.classList.contains('turnBack') === false){
        hideCard(showThis);
        rounds++ ;

        if(Status === false){
            Letters = showThis;
            Status = true;

        } else if (Letters.innerHTML !== showThis.innerHTML){
            Status = false;
            setTimeout(hideCard, 600, Letters);
            setTimeout(hideCard, 600, showThis);
            Letters = null;

        } else {
            Status = false; 
            cardPairs.push(showThis.classList[1]);
        } if (Pairs === cardPairs){
            
            setTimeout(Finish, 600);
        }
    };
};

function hideCard(card) {

    const frontCard = card.querySelector('.front-face');
    frontCard.classList.toggle('turnFront');

    const backCard = card.querySelector('.back-face');
    backCard.classList.toggle('turnBack')
};


/*mensagem final*/

function Finish() {

    alert(`Você ganhou em ${rounds} jogadas!`);
};


/*play no jogo*/

addCards();








   







