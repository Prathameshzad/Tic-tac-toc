let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgcontainer = document.querySelector(".ms-container");
let msg = document.querySelector("#msg");


let turn0 = true;
const winpatterns =  [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,3,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const  resetGame= () =>{
    turn0 =true;
    anableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was click");
        if(turn0 === true){
            box.innerText = "0";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disbleBoxes = ()=>{
 for(box of boxes){
    box.disabled = true;
    box.innerText = "";
 }
}

const anableBoxes = ()=>{
        for(box of boxes){
           box.disabled = false;
        }
};


const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disbleBoxes();
};

const checkWinner = () =>{
    for(let pattern of winpatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val !="" && pos2Val !="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);