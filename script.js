/*inicio do jogo*/

let numberCards = Number ( prompt('Insira um número par entre 4 e 14.') );

while (( numberCards < 4 || numberCards > 14 || (numberCards % 2) !== 0)){
    numberCards = Number ( prompt('Insira um número par entre 4 e 14.') );
}


/*distribuir cartas*/

const imgCards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];

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
                    <img data-test="face-down-image" src="./imagem/back.png" class="img"/>
                </div> 
                <div class="back-face face">
                    <img data-test="face-up-image" src="./imagem/${cards[i]}.gif" class="img"/>
                </div> 
            </div> ` ;
    }    
}

addCards();





