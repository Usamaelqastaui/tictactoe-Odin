const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let clicks = 0;
const spots = document.querySelectorAll('.spot');



let player1 = {
    name: 'Player 1',
    moves: []
}

let player2 = {
    name: 'Player 2',
    moves: []
}


function newGame(){
    for( let i =0; i < spots.length; i++ ){
        spots[i].addEventListener('click', (e)=>{
            (clicks%2 === 0)? play(e, 1): play(e,2);
            // clicks++;
        }, {once:true})
    }
}


const restart = document.querySelector('.restart');

restart.addEventListener('click',()=>{
    location.reload();
    
})

function play(e, player){

    console.log(clicks);
    
    if(player === 1){
        document.getElementById(e.target.id).textContent = "X";
        player1.moves.push(Number(e.target.id));
        clicks++;
        // console.log(`player 1 moves are ${player1.moves}`)
        if(player1.moves.length >= 3){
            if (checkWin(player1.moves)){
                alert("Player 1 is the winner");
                location.reload();
            };
        }
    } else {
        document.getElementById(e.target.id).textContent = "O";
        player2.moves.push(Number(e.target.id));
        clicks++;
        if(player2.moves.length >= 3){
            if (checkWin(player2.moves)){
                alert("Player 2 is the winner");
                location.reload();
            };
        }
    }
}


function checkWin(moves){
    for (let i = 0 ; i < 8; i++){
        let counter = 0;
        for (let j = 0; j < 3 ; j++){
            if(moves.includes(winCombos[i][j])){
                counter++;
            }
            if(counter === 3){
                return true;
            }
        }
    }
}
newGame();