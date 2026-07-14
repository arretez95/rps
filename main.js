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

let humanScore
let computerScore