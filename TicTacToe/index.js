let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcon=document.querySelector(".msg-con");
let msg=document.querySelector("#msg");

let turnO=true; //playerX,playerO

//store all winning elements in 2d array

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// to get some action after clicking buttons

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){ // player O
         box.innerText="O";
         turnO=false;
        }
        else  //player X
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

// reset game
const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgcon.classList.add("hide");
};

// making boxes to work after clicking new game
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

// making boxes not work after one winner
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

// displaying Winner

const showWinner =(winner) =>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableBoxes();
};

// checking for winner

const checkWinner =() =>{
     for( let pattern of winPatterns)
     {
    //    console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
       let pos1Val=boxes[pattern[0]].innerText;
       let pos2Val=boxes[pattern[1]].innerText;
       let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                   showWinner(pos1Val);
            }
        }
     }
};

// when newgamebtn was clicked we call function reset

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

