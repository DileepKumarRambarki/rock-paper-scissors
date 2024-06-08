let choiceSelected;
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
const choices=["rock","paper","scissor"];
let random;
let computerChoice;
let display=document.querySelector(".display");
let userScoreBoard=document.querySelector("#userScore");
let computerScoreBoard=document.querySelector("#computerScore");
let computerScore=0;
let userScore=0;
let msg=display.querySelector(".message");
let computerImg=document.querySelector(".computerChoice");

let game=(choiceSelected)=>{
    random=Math.floor(Math.random()*3);
    computerChoice=choices[random];
    computerImg.setAttribute("id",computerChoice);
    if(choiceSelected===computerChoice)
    {
        
        console.log("--draw--");
        display.innerText=`Draw! ${choiceSelected} draws ${computerChoice}`;
        display.style.color="blue";

    }
    else if(random===(choices.indexOf(choiceSelected)+1)%3){
        console.log("--defeat--");
        computerScore++;
        display.innerText=`Defeat! ${choiceSelected} beaten by ${computerChoice}`;
        display.style.color="red";
    }
    else{
        console.log("--win--");
        userScore++;
        display.innerText=`Win! ${choiceSelected} beat's ${computerChoice}`;
        display.style.color="green";
    }
    userScoreBoard.innerText=userScore;
    computerScoreBoard.innerText=computerScore;
};
rock.addEventListener("click",()=>{
    choiceSelected="rock";
    console.log(choiceSelected);
    game(choiceSelected);
});
paper.addEventListener("click",()=>{
    choiceSelected="paper";
    console.log(choiceSelected);
    game(choiceSelected);
});
scissor.addEventListener("click",()=>{
    choiceSelected="scissor";
    console.log(choiceSelected);
    game(choiceSelected);
});

