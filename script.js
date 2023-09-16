const score = {
    wins : 0,
    losses : 0,
    ties : 0
 }
  
  function pickYourMove(yourMove){
  const computerMove= pickComputerMove();
  let result = '';

if(yourMove === 'scissors'){
  if(computerMove === 'rock'){
      result ='You Lost';
  }else if(computerMove === 'paper'){
      result= 'You Won';
  }else if(computerMove === 'scissors'){
      result = 'Tie';
  }
}else if (yourMove === 'rock'){
  if(computerMove === 'rock'){
      result ='Tie';
  }else if(computerMove === 'paper'){
      result= 'You Lost';
  }else if(computerMove === 'scissors'){
      result = 'You Won';
  }
}else if(yourMove === 'paper'){
      if(computerMove === 'rock'){
      result ='You Won';
  }else if(computerMove === 'paper'){
      result= 'Tie';
  }else if(computerMove === 'scissors'){
      result = 'You Lost';
  }
} 

if (result === 'You Won') {
      score.wins += 1;
}else if(result === 'You Lost'){
  score.losses += 1;
}else if(result === 'Tie'){
  score.ties += 1;
}

alert(`You picked ${yourMove}.
Computer picked ${computerMove}. ${result}.
Wins: ${score.wins}, Lost: ${score.losses}, Tie: ${score.ties}`);
}


  function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove= '';

  if(randomNumber > 0 && randomNumber < 1/3) {
      computerMove ='rock';
  }else if (randomNumber > 1/3 && randomNumber < 2/3) {
      computerMove = 'paper';
  }else if (randomNumber > 2/3 && randomNumber < 1){
      computerMove ='scissors';
  }
return computerMove;
}

