let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".game-container");
const msg = document.querySelector("#msg");
const yourScore = document.querySelector("#your-score");
const cScore = document.querySelector("#computer");

const genComChoice=()=>{
    const options=["rock","paper","scissors"];
    const random = Math.floor(Math.random()*3);
    return options[random];
};


const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userScore++;
        yourScore.innerText=userScore;
         msg.innerText = `**You win** your ${userChoice} beats computer ${comChoice}`;
         msg.style.background="Green"

    }
    else{
        compScore++;
        cScore.innerText=userScore;
        msg.innerText = `You Loose!!!! comp ${comChoice} beats your ${userChoice}`;
        msg.style.background="Red"

    }
}

const drawGame=()=>{
console.log("Game is Draw");
msg.innerText = "Game Draw ! Try again";
msg.style.background="Grey"

}


const playGame=(userChoice) =>{
    console.log("User choice is ",userChoice);
    const comChoice = genComChoice();
    console.log("Computer choice is ",comChoice);
    if(userChoice===comChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            //scissor,paper
            userWin = comChoice==="paper"?false:true;
        }
        else if(userChoice == "paper"){
            //rock,scissor
            userWin = comChoice==="rock"?true:false;
        }
        else{
            //rock,paper
            userWin = comChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,comChoice);

    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        // console.log("choice is clicked",userChoice);
        playGame(userChoice);

    });
});
