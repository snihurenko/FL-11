let randomNum = 0;
let attempt = 3;
let prize = 200;
let prize2 = 400;
let max = 8;
let total = 0;
let min = 0;
let i = 0;
let maxi = 3;
let halfprize = 2;
let extraMax = 4;
let firstPrize = 100;
let defaultMax = 8;

let play = confirm('Do you want to play a game?');
if (play === false) {
	alert('You did not become a billionaire, but can');
} else {
	randomNum = Math.floor(Math.random()*(max-min));
		for (i=maxi; i>0; i--) {
			attempt = i;
			prize /= halfprize; 
			let userNum = prompt('Choose a roulette pocket number from 0 to '
				+ max +'\nAttempts left: '+attempt+'\nTotal prize: '+total
				+'$\nPossible prize on current attempt: '+prize+'$');
			if (userNum === randomNum) {
				total = prize;
				alert('Congratulation, you won! Your prize is: '+total+'$');
				let continueGame = confirm('Do you want to continue?');
					if (continueGame === true) { 
					max += extraMax;
					randomNum = Math.floor(Math.random()*(max-min));
					total = prize;
					for (i=maxi; i>0; i--) {
						attempt = i;
						prize2 /= halfprize; 
						let userNum = prompt('Choose a roulette pocket number from 0 to '
							+ max +'\nAttempts left: '+attempt+'\nTotal prize: '+total+
							'$\nPossible prize on current attempt: '+prize2+'$');
						if (userNum === randomNum) {
							total = prize + prize2;
							alert('Congratulation, you won! Your prize is:' + total + '$');
						} else {
							alert('Thank you for your participation. Your prize is ' + total + '$'); 
						}
					}
					} else {
						alert('Thank you for your participation. Your prize is: ' + total + '$'); 
						let playAgain = confirm('Do you want to play again?');
						if (playAgain === true) {
							total = 0;
							prize = firstPrize;
							max = defaultMax;
							randomNum = Math.floor(Math.random()*(max-min));
						} else {
							alert('Thank you for your participation. Your prize is: ' + total + '$'); 
						}
					}
			let playAgain = confirm('Do you want to play again?');
				if (playAgain === true) {
					total = 0;
					prize = firstPrize;
					max = defaultMax;
					randomNum = Math.floor(Math.random()*(max-min));
				}
			} else {
			alert('Thank you for your participation. Your prize is: 0$'); 
			}	
	}
}
