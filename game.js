let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new");
let msg=document.querySelector("#winner");
let mbox=document.querySelector(".new");

let turnO= true;
let c=0;
const winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];
const resetg=()=>{
    turnO=true;
    c=0;
    enable();
    mbox.classList.add("hide");

};
const disable=()=>{
    for (let box of boxes)
    {
        box.disabled=true;
    }
};
const enable=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    mbox.classList.remove("hide");
    disable();
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        c++;
        let isWinner=check();
        if(c===9 && !isWinner)
        gamedraw();
        
    });
});
const gamedraw=()=>{
    msg.innerText="Game was a draw";
    mbox.classList.remove("hide");
    disable();
};
const check=()=>{
    for(i of winPattern)
    {
        let p1=boxes[i[0]].innerText;
        let p2=boxes[i[1]].innerText;
        let p3=boxes[i[2]].innerText;
        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3){
            
            showwinner(p1);
            return true;
            }
        }

    }
};
newgame.addEventListener("click",resetg);
reset.addEventListener("click",resetg);
