
let humanScore = 0
let computerScore = 0

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

/* function getHumanChoice() {
return deal = prompt("Rock, paper, scissors...!")
} */

function playRound(humanChoice, computerChoice) {
    let player = humanChoice.toLowerCase()
    switch (player) {
        case "rock":
        if (computerChoice === "rock") {
            console.log("It's a draw!")
        } else if (computerChoice === "paper") {
            computerScore++
            console.log(`You lose! Your score: ${humanScore} | Computer score: ${computerScore}`)
        } else if (computerChoice === "scissors") {
            humanScore++
            console.log(`You win! Your score: ${humanScore} | Computer score: ${computerScore}`)
        }
        break
        case "paper":
        if (computerChoice === "rock") {
            humanScore++
            console.log(`You win! Your score: ${humanScore} | Computer score: ${computerScore}`)
        } else if (computerChoice === "paper") {
            console.log("It's a draw!")
        } else if (computerChoice === "scissors") {
            computerScore++
            console.log(`You lose! Your score: ${humanScore} | Computer score: ${computerScore}`)
        }
        break
        case "scissors":
        if (computerChoice === "rock") {
            computerScore++
            console.log(`You lose! Your score: ${humanScore} | Computer score: ${computerScore}`)
        } else if (computerChoice === "paper") {
            humanScore++
            console.log(`You win! Your score: ${humanScore} | 
					Computer score: ${computerScore}`)
        } else if (computerChoice === "scissors") {
            console.log("It's a draw!")
        }
        break
    }
}

    
    
    
    
    
document.addEventListener("click", (e) => {
    const humanSelection = e.target.id
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
})