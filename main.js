console.log("Hello!")

function getComputerChoice() {
	return Math.floor(Math.random * 100) + 1
	/* if (random === 2) {
		return "rock"
	} else if (random === 1) {
		return "paper"
	} else if (random === 0) {
		return "scissors"
	} */
}

console.log(getComputerChoice())