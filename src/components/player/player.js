import './player.css';

function Player() {

  window.addEventListener('load', startControl)
  
  return (
    <div id="Player">
      
    </div>
  );
}

function startControl(){
  document.addEventListener('keydown', function (e) {playerActions(e)})
}
function playerActions(e){
    switch (e.key){
      case 'w':
        move('y', false)
        break;
      case 'a':
        move('x', false)
        break;
      case 's':
        move('y', true)
        break;
      case 'd':
        move('x', true)
        break;
        
      default:
        break;
    }
}
function move(direction, positive){
  let player = document.getElementById('Player')
  let newPositon = 0
  let increment = 10
  
  if (direction === 'y') {
    let top = parseInt(player.style.top)
    top = top ? top : 0
    newPositon = positive ? top + increment : top - increment
    player.style.top = newPositon + 'px'
  }

  if (direction === 'x') {
    let left = parseInt(player.style.left)
    left = left ? left : 0
    newPositon = positive ? left + increment : left - increment
    player.style.left = newPositon + 'px'
  }
}

export default Player;
