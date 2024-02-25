function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playGame() {
  let pointsPlayer = 0;
  let pointsComputer = 0;

  while (pointsPlayer != 3 && pointsComputer != 3) {
    const selection = prompt().toLowerCase();
    let result;
    //Wrong Userinput?
    try {
      result = playRound(selection, getComputerChoice());
    } catch (error) {
      console.error(error.message);
      continue;
    }
    //Win?
    if (result.charAt(4) == "W") {
      pointsPlayer++;
    }
    //Loss?
    else if (result.charAt(4) == "L") {
      pointsComputer++;
    }
    console.log(result);
  }
  //Output
  if (pointsPlayer == 3) {
    console.log("You win! 3 : " + pointsComputer);
  }
  if (pointsComputer == 3) {
    console.log("You lose! " + pointsPlayer + " : 3");
  }
  return;
}

function playRound(playerSelection, computerSelection) {
  //Tie
  if (playerSelection == computerSelection) {
    return "TIE! You both played " + playerSelection + "!";
  }
  //Rock
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock!";
    }
    return "You Win! Rock beats Scissors!";
  }
  //Paper
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper!";
    }
    return "You Win! Paper beats Rock!";
  }
  //Scissors
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors!";
    }
    return "You Win! Scissors beats Paper!";
  }
  throw new Error("Input is not valid! Only: rock, paper, scissors");
}
