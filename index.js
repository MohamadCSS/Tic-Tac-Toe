
let header = document.getElementById('header');
let reset = document.getElementById('reset');
let containers = Array.from(document.getElementsByClassName('box'));

const firstLetter = 'X';
const secondLetter = 'O';
let currentPlayer = secondLetter;
let spaces = Array(9).fill(null);

const start = () => {
    containers.forEach(container => container.addEventListener('click', clicked));

}

function clicked(e){
    const boxId = e.target.id;

    if(!spaces[boxId]){
        spaces[boxId] = currentPlayer;
        e.target.innerText = currentPlayer;
        const winner = checkWin();
        if(winner !== false){
            alert(currentPlayer + ' has won!');
        }
        else if(checkDraw()){
            alert('The has ended in a draw');
        }
        
        currentPlayer = currentPlayer == firstLetter ? secondLetter : firstLetter;
        
    }
}

const winningpossibilities = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

function checkWin(){
    for(const condition of winningpossibilities){
        let [a, b, c] = condition;
        if(spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]){
            return [a, b, c];
        }
    }
    return false;

}
function checkDraw() {
    return !spaces.includes(null);
}


reset.addEventListener('click', resetGame)

function resetGame(){
    spaces.fill(null);
    containers.forEach( container =>{
        container.innerText = '';
    })
    currentPlayer = secondLetter;
}

start();
