let clicks = 0;
const spots = document.querySelectorAll('.spot');

for( let i =0; i < spots.length; i++ ){
    spots[i].addEventListener('click', (e)=>{
        clicks++;
        (clicks%2 === 0)? play(e, 2): play(e,1);
    })
}

const restart = document.querySelector('.restart');

restart.addEventListener('click',()=>{
    clicks = 0
    for( let i =0; i < spots.length; i++ ){
        spots[i].textContent = "";
        }
    
})

function play(e, player){
    if(player === 1){
        document.getElementById(e.target.id).textContent = "X";
    } else {
        document.getElementById(e.target.id).textContent = "O";
    }
}