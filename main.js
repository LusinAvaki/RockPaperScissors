let userScore = 0;
let computerSore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.querySelector('.result p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function win(u, c) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerSore;
    result_p.innerHTML = `${u} beats ${c}. You win!`
}
function lose(u, c) {
    computerSore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerSore;
    result_p.innerHTML = `${u} loses ${c}. You lost!`
}
function draw(u, c) {
    result_p.innerHTML = `${u} equals ${c}. It's a draw!`
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
         break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
        break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
        break;
    }
}
main();
function main(){
    rock_div.addEventListener('click',() => game('rock'));
    paper_div.addEventListener('click',()=> game('paper'));
    scissors_div.addEventListener('click',() => game('scissors'));
}

function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
getComputerChoice();