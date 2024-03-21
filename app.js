let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");

const compChsMsg = document.querySelector("#comp-choice");
const bckComp = document.querySelector(".comp");

const resetBtn = document.querySelector("#rst-btn");



resetBtn.addEventListener("click", () => {
    userScore = 0;
    uScore.innerText = userScore;
    compScore = 0;
    cScore.innerText = compScore;
    msg.innerText = "Play your move";
    compChsMsg.innerText = "Comp choice..";
    msg.style.backgroundColor = "#31363F";
    msg.style.color = "#EEEEEE";
});

let compChs = (compChoice) => {
    compChsMsg.innerText = `CC: ${compChoice}`;
}

const showWinner = (userWin) => {
    if(userWin){
    console.log("You win!");
    msg.innerText = "You win!";
    msg.style.backgroundColor = "green";
    // bckComp.style.backgroundColor = "red";
    userScore++;
    uScore.innerText = userScore;
    }
    else{
        console.log("You lose");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        // bckComp.style.backgroundColor = "green";
        compScore++;
        cScore.innerText = compScore;
    }
} 

const drawGame = () => {
    console.log("Its a DRAW");
    msg.innerText = "Its a DRAW!";
    msg.style.backgroundColor = "gray";
    msg.style.color = "black";
}

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3); 
    return options[randomIdx];
}

const playGame = (userChoice) => {
    console.log("User's choice is ", userChoice);
    // Generate Comp Choice
    const compChoice = genCompChoice();
    compChs(compChoice);
    console.log("Comp's choice is ", compChoice );

    if(userChoice===compChoice) {
        drawGame();
        // msg.inerText = "Its a DRAW";
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
        userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="rock" ? true : false; 
        }
        else{
            userWin = compChoice==="paper" ? true : false;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
});