//fet6ching the details
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let themeBtn=document.querySelector("#theme")
let newGame=document.querySelector("#new-game")
let msgcontainer=document.querySelector(".msg")
let msg=document.querySelector("#message")
// alternate turn
let turn0=true;
//winning patterns
const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const resetGame = () =>{
    let turn0=true;
    enableBox();
    msgcontainer.classList.add("hide");

};

//box for clicks
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

//disable buttons
const disableBox= () =>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
    // for(let box of boxes){
    //     box.disabled=true;
    // }
}
// Enable Box
const enableBox= () =>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
}

//Reset Button

//showing the winner
const showWinner=(winner)=>{
    msg.innerText="Player "+winner+" wins!";
    msgcontainer.classList.remove("hide");
    disableBox()

}

// check winner
const checkWinner= ()=>{
    for (let pattern of winPatterns){
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;

            if (pos1val!="" && pos2val!="" && pos3val!="" ){
                if (pos1val===pos2val && pos2val===pos3val){
                    console.log("Winner", pos1val);
                    showWinner(pos1val);
            }
    }
};
};

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);









themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });