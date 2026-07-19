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
    divResult.textContent = `Computer chose ${computerChoice}. `
    switch (player) {
        case "rock":
            if (computerChoice === "rock") {
                divResult.textContent += "It's a draw!"
            } else if (computerChoice === "paper") {
                computerScore++
                divResult.textContent += "You lose!" 
            } else if (computerChoice === "scissors") {
                humanScore++
                divResult.textContent += "You win!"
            }
            break
        case "paper":
            if (computerChoice === "rock") {
                humanScore++
                divResult.textContent += "You win!" 
            } else if (computerChoice === "paper") {
                divResult.textContent += "It's a draw!"
            } else if (computerChoice === "scissors") {
                computerScore++
                divResult.textContent += "You lose!"
            }
            break
        case "scissors":
            if (computerChoice === "rock") {
                computerScore++
                divResult.textContent += "You lose!"
            } else if (computerChoice === "paper") {
                humanScore++
                divresult.textContent += "You win!"
            } else if (computerChoice === "scissors") {
                divResult.textContent += "It's a draw!"
            }
            break
    }
    if (computerScore === 5 || humanScore === 5) {
        divResult.textContent += computerScore > humanScore ? " Computer wins!" : " Player wins!"
    }
    divScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`
}
    
    
    
document.addEventListener("click", (e) => {
    console.log(e.target.tagName)
    const humanSelection = e.target.id
    const computerSelection = getComputerChoice()
    if (e.target.tagName === "BUTTON") {
        playRound(humanSelection, computerSelection)
    }
})