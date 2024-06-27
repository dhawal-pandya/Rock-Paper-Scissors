const choices = ['rock', 'paper', 'scissors'];
const resultText = document.getElementById('result');
const toggleButton = document.getElementById('toggleMode');
const compCounter = document.getElementById('computerCounter');
const userCounter = document.getElementById('userCounter');
let userCount = 0;
let compCount = 0;

let version = "cheat"; // real/cheat

const getResult = (playerChoice, computerChoice) => {
    let result = '';
    if (playerChoice === computerChoice) {
        result = `It's a tie! You both chose ${playerChoice}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}`;
        userCount++
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}`;
        compCount++;
    }
    return result;
};

const getComputerChoice = (playerChoice) => {
    if (version === "real") {
        return choices[Math.floor(Math.random() * choices.length)];
    }
    if (version === "cheat") {
        if (playerChoice === 'rock') return "paper";
        if (playerChoice === 'paper') return "scissors";
        if (playerChoice === 'scissors') return "rock";
    }
};

const toggleMode = () => {
    toggleButton.innerText = version
    version = version === "real" ? "cheat" : "real";
};

document.querySelectorAll('button[id]').forEach(button => {
    if (button.id === 'rock' || button.id === 'paper' || button.id === 'scissors') {
    button.addEventListener('click', () => {
        if (compCount > 9) {
            toggleButton.className="absolute bottom-1 right-1 bg-yellow-500 hover:bg-yellow-700 text-white text-xs font-bold py-1 px-2 rounded"
        }
        const playerChoice = button.id;
        const computerChoice = getComputerChoice(playerChoice);
        const result = getResult(playerChoice, computerChoice);
        resultText.textContent = result;
        userCounter.textContent = userCount;
        compCounter.textContent = compCount;
    });
}});

toggleButton.addEventListener('click', toggleMode);

