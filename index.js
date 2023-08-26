function randomnum() {
    let RandNum = Math.floor(Math.random() * 3); 
    return RandNum
 }

 let RandomNumber = randomnum()

function getComputerChoice() {
 
if (RandomNumber === 0) {
  return "Rock"
}

else if (RandomNumber === 1) {
  return "Paper"
}

else {
  return "Scissors"
}

 }

//  console.log(getComputerChoice())

  function getPlayerChoice() {
  let UserInput = prompt("What would you like to play?")
  return UserInput  
}

//  console.log (getPlayerChoice())

 let ComputerScore = 0
 let playerScore = 0

function playRound(ComputerChoice, PlayerChoice) {
 
  console.log(ComputerChoice)

  if (ComputerChoice == "Rock" && PlayerChoice == "scissors") {
    ComputerScore++; 
    return("Computer Wins! Score is: Computer: " + ComputerScore + " Player:" + playerScore)
  }

  else if (ComputerChoice == "Paper" && PlayerChoice == "scissors") {
    ComputerScore++; 
    return("Computer Wins! Score is: Computer: " + ComputerScore + " Player:" + playerScore)
  }

  else if (ComputerChoice == "Scissors" && PlayerChoice == "scissors") {
    ComputerScore++; 
    return("Computer Wins! Score is: Computer: " + ComputerScore + " Player:" + playerScore)
  }

  else {
    return("teri ma ki chut")
  }
}

playRound(getComputerChoice(),"Scissors")