const choices =["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
if (player === computer) {
    return "draw"
} else if (player === "rook") {
    return computer === "scissors" ? "player" : "computer";
} else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
} else {return computer === "paper" ? "player" : "computer";
}
};

const showResult = (result) => {
    if (result === "palyer") {
        console.log("You Win.");
        playerScore++;
    } else if (result === "computer") {
        console.log("You lose!");
        computerScore++;
    } else {
        console.log("It' s a tie");
    }

    console.log (`Your score: ${playerScore}`);
    console.log (`computer's score: ${computerScore}`);
    console.log(".....................");
};



const play = () => {
    const playerChoice = prompt("Choose Rock, Paper, Scissors");
    if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
        console.log(`You choose ${playerChoice}`);
    } else {
        console.log("You cheated!");
        return;
    }
    
    const randomNumbers = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomNumbers];
    console.log(`Computer choose ${computerChoice}.`);
    
    
    const gameResult = checkWinner(playerChoice, computerChoice);
    showResult(gameResult);
    play();
};


play();
