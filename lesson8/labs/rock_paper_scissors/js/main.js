document.getElementById ('paper').onclick = calculateWinner;
document.getElementById ('scissors').onclick = calculateWinner;
document.getElementById ('rock').onclick = calculateWinner;

var userChoice = ["paper, scissors, rock"]

var bot = userChoice

function calculateWinner() {

	if (userChoice === 'paper') {
		
		if (bot === 'scissors') {
			alert('lose');
		}
		else if (bot === 'rock') {
			alert('win');
		}
		else if (bot === 'paper') {
			alert('draw ');
		}
}





