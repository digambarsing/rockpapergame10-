document.title="Rock Paper Scissor Game";


let userscore=0;
let computerscore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscores=document.querySelector("#You");
const comscores=document.querySelector("#computer");

// computer choice

const compchoice=()=>{
    const options=["rock","Paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return options[index];
}



// draw game

function drawgame(){
    console.log("game is draw");
    msg.innerText="game is draw";
} 


const showwinner=(userwin)=>{
    if(userwin){
        console.log("you win");
        msg.innerText="You win";
        userscores.innerText=userscore++;
    }else{
        console.log("you lose");
        msg.innerText="You lose";
        comscores.innerText=computerscore++;
    }    
    
}




const playgames=(userchoice)=>{
    console.log(" user choice is ",userchoice);
    // generate computer choice
    const comchoices=compchoice();
    console.log("computer choice is ",comchoices);

    if(userchoice === comchoices){
        drawgame();
    }else{
        let userwin=true;
        if(userwin === "rock"){
            userwin=comchoices==="Paper"?false:true;
        }else if(userwin === "Paper"){
            userwin=comchoices==="scissor"?false:true;

        }else{
            userwin=comchoices==="rock"?false:true;
        }
        showwinner(userwin);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgames(userchoice);
       
    });
});