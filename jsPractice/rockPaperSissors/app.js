const rps = ["rock", "paper", "sissors"];
let computerSelection;
let playerSelection;
let roundsToPlay;

function gamePlay(computerSelection, playerSelection) {
	computerSelection = computerPlay();
	playerSelection = humanPlay();
	if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
		console.log("Its a Tie");
	}
	if (
		computerSelection.toLowerCase() === "rock" &&
		playerSelection.toLowerCase() === "sissors"
	) {
		console.log("You Lose, rock beats sissors");
	}
	if (
		computerSelection.toLowerCase() === "rock" &&
		playerSelection.toLowerCase() === "paper"
	) {
		console.log("You win, paper beats rock");
	}
	if (
		computerSelection.toLowerCase() === "sissors" &&
		playerSelection.toLowerCase() === "rock"
	) {
		console.log("You win, rock beats sissors");
	}
	if (
		computerSelection.toLowerCase() === "sissors" &&
		playerSelection.toLowerCase() === "paper"
	) {
		console.log("You lose, sissors beat paper");
	}
	if (
		computerSelection.toLowerCase() === "paper" &&
		playerSelection.toLowerCase() === "rock"
	) {
		console.log("You lose, paper beats rock");
	}
	if (
		computerSelection.toLowerCase() === "paper" &&
		playerSelection.toLowerCase() === "sissors"
	) {
		console.log("You win, sissors beat paper");
	}
}

function computerPlay() {
	randNum = Math.floor(Math.random() * rps.length);
	computerSelection = rps[randNum];
	return computerSelection;
}

function humanPlay() {
	playerSelection = window.prompt("Pick rock paper or sissors...");
	return playerSelection;
}

function rounds() {
	roundsToPlay = window.prompt("how many rounds do you want to play?");
	for (let i = 1; i <= roundsToPlay; i++) {
		gamePlay();
	}
}

rounds();
// humanPlay();
// console.log(playerSelection);
// gamePlay();
// computerPlay();
// console.log(computerSelection);
