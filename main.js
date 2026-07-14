console.log("Hello!")

function getComputerChoice() {
	let random = Math.floor(Math.random() * 3)
	if (random === 2) {
		return "rock"
	} else if (random === 1) {
		return "paper"
	} else if (random === 0) {
		return "scissors"
	}
}

console.log(getComputerChoice())

function getHumanChoice() {
	return deal = prompt("Rock, paper, scissors...!")
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
	switch (humanChoice) {
		case "rock":
			if (computerChoice === "rock") {
				"It's a draw!"
			} else if (computerChoice === "paper") {
				computerScore++
				`You lose!
				Your score: ${humanScore}
				Computer score: ${computerScore}`
			} else if (computerChoice === "scissors") {
				humanScore++
				`You win!
				Your score: ${humanScore}
				Computer score: ${computerScore}`
			}
	}
}