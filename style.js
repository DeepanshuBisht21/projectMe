let myScore=0;
let rock=0;
let paper=0;
let scissor=0;
let boxes=document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach((evt,idx)=>{
    console.log(evt,idx);
    let resultt=document.querySelector(".result");
    evt.addEventListener("click",()=>{
        const choiceId=evt.getAttribute("id");
        // console.log(choiceId);
        mychoice(choiceId);
        wintheM(choiceId);
        // if(idx==0){
        //     console.log("Rock Clicked");
        //    rock++;
        // }
        // else if(idx==1){
        //     console.log("Paper Clicked");
        //  paper=1;
          
        // }
        // else if(idx==2){
        //     console.log("Scissor Clicked");
        //   scissor=2;
           
        // }
    })
})

const mychoice=(choice)=>{
    console.log(choice);
}
mychoice();





// const changeResult=()=>{

// }
// changeResult();
let KnowNuber=0;
let knowValue="";
const randamNum=()=>{
    let number=Math.floor(Math.random()*3);
   if(number==0){
    knowValue="rock";
   }
   else if(number==1){
    knowValue="paper";
   }
   else if(number==2){
    knowValue="scissor";
   }
    KnowNuber=number;
}

// console.log(KnowNuber)



//cheak who win
const wintheM=(a)=>{
    console.log(a);
    console.log(knowValue);
    randamNum();
    let resultt=document.querySelector(".result");
    if(knowValue==a){
        resultt.innerHTML="Match Draw , Play again"
    }
    else if(a==="rock" && knowValue==="paper"){
        resultt.innerHTML="Computer Win";
    }
    else if(a==="rock" && knowValue==="scissor"){
        resultt.innerHTML="You Win";
    }
    else if(a==="paper" && knowValue==="rock"){
        resultt.innerHTML="You Win";
    }
    else if(a==="paper" && knowValue==="scissor"){
        resultt.innerHTML="Computer Win";
    }
    else if(a==="scissor" && knowValue==="rock"){
        resultt.innerHTML="Computer Win";
    }
    else if(a==="scissor" && knowValue==="paper"){
        resultt.innerHTML="You Win";
    }
   
   
}

// lets change the 

// let EventsHandler=()=>{
//     let myArr=[];
// boxes.addEventListner("click",()=>{
//     console.log("clicked")
// })
// }