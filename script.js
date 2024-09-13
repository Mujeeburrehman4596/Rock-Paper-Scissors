const choices = ['rock', 'paper', 'scissors'];
const results = {
    'rock': {'rock': 'draw', 'paper': 'lose', 'scissors': 'win'},
    'paper': {'rock': 'win', 'paper': 'draw', 'scissors': 'lose'},
    'scissors': {'rock': 'lose', 'paper': 'win', 'scissors': 'draw'}
};

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = this.getAttribute('data-choice');
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        document.getElementById('player-choice').innerText = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        document.getElementById('computer-choice').innerText = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        
        const result = results[playerChoice][computerChoice];
        const outcome = document.getElementById('outcome');
        
        if (result === 'win') {
            outcome.className = 'alert alert-success';
            outcome.innerText = 'YOU WIN! 😃';
        } else if (result === 'lose') {
            outcome.className = 'alert alert-danger';
            outcome.innerText = 'YOU LOSE! 😢';
        } else {
            outcome.className = 'alert alert-warning';
            outcome.innerText = 'IT\'S A DRAW! 😐';
        }
    });
});
