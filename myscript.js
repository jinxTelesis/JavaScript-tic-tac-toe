
var restartGame = document.querySelector("#b")

var squares = document.querySelectorAll('td')

function resetBoard(){
  for(var i =0; i <squares.length;i++){
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',restartBoard);

function changeMarker(){

  if(this.textContent === ''){
    this.textContent = 'X';
  } else if (this.textContent === 'X'){
    this.textContent = 'O';
  } else{
    this.textContent = '';
  }
  
}

for(var i = 0; i < square.length;i++){
  squares[i].addEventListener('click',changeMarker)
}
