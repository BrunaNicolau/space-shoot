const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, seconbdCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;

    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath () {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disablecard();
        return;
    }

    unflipCards();
}

function disablecard (){
    firstCard.removeEventlistener('click', flipCard );
    seconbdCard.removeEventlistener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    
        resetBoard();
    }, 1500);
    
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, seconbdCard] = [null, null];
    
}

(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random()*12);
        card.style.order = randomPosition;
    });
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});

