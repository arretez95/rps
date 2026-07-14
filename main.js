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
			break
		case "paper":
			if (computerChoice === "rock") {
				humanScore++
				`You win!
				Your score: ${humanScore}
				Computer score: ${computerScore}`
			} else if (computerChoice === "paper") {
				"It's a draw!"
			} else if (computerChoice === "scissors") {
				computerScore++
				`You lose!
				Your score: ${humanScore}
				Computer score: ${computerScore}`
			}
			break
		case "scissors":
			if (computerChoice === "rock") {
				computerScore++
				`You lose!
				Your score: ${humanScore}
				Computer score: ${computerScore}`
			} else if (computerChoice === "paper") {
				humanScore++
				`You win!
				Your score: ${humanScore}
				Computer score: ${computerScore}`
			} else if (computerChoice === "scissors") {
				"It's a draw!"
			}
			break
	}
}