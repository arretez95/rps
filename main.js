let humanScore = 0
let computerScore = 0

let divScore = document.querySelector("#score")
let divResult = document.querySelector("#result")

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

function playRound(humanChoice, computerChoice) {
    let player = humanChoice.toLowerCase()
    switch (player) {
        case "rock":
        if (computerChoice === "rock") {
            divResult.textContent = "It's a draw!"
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
            divResult.textContent = "It's a draw!"
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
            divResult.textContent = "It's a draw!"
        }
        break
    }
}
    
    
    
document.addEventListener("click", (e) => {
    const humanSelection = e.target.id
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
})