const cards = document.querySelectorAll('.card');
let selectedCards = [];

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (selectedCards.length < 2 && !card.classList.contains('selected')) {
            card.classList.add('selected');
            selectedCards.push(card);
        }
        if (selectedCards.length === 2) {
            checkMatch();
        }
    });
});

function checkMatch() {
    const [card1, card2] = selectedCards;
    const result = document.getElementById('result');
    if (card1.dataset.word === card2.dataset.word) {
        result.textContent = 'Match Found!';
        selectedCards = [];
    } else {
        result.textContent = 'Try Again!';
        setTimeout(() => {
            card1.classList.remove('selected');
            card2.classList.remove('selected');
            selectedCards = [];
        }, 1000);
    }
}

document.getElementById('checkButton').addEventListener('click', () => {
    if (selectedCards.length !== 2) {
        alert('Select two cards!');
    }
});
