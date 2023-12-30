let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissiors = document.querySelector(".scissors");
let oppo = document.querySelector("#oppo");
let button = document.querySelector("#click");
let youselected = document.querySelector("#yo")
let win = document.querySelector("#win"); 
let youmark = document.querySelector("#you");
let opponentmark = document.querySelector("#opponent");
let x,y;
let l = 0 ;
let m = 0;
let som = false;
rock.addEventListener("click",()=>{
    if (!som) {
        youselected.innerText = "you selected rock";
        x = 0;
        console.log("rock");
        som = true;
    }
})
paper.addEventListener("click",()=>{
    if(!som){
        youselected.innerText = "you selected paper";
        x = 1;
        console.log("paper");
        som =true;
    }
})
scissiors.addEventListener("click",()=>{
    if(!som){
        youselected.innerText = "you selected scissor";
        x = 2;
        console.log("scissors");
        som = true;
    } 
})
let max = 3;
button.addEventListener("click",()=>{
    let a = getRandomInt(max);
    button.disabled = true;
    if(a === 0){
        oppo.innerText = "computer selected rock";
        y=0;
    }
    if(a === 1){
        oppo.innerText = "computer selected paper";
        y = 1;
    }
    if(a===2){
        oppo.innerText = "computer selected scissor";
        y = 2;
    }
    button.ariaDisabled = true;
    if(x === 0 && y === 0 || x === 1 && y === 1 || x === 2 &&y === 2){
        win.innerText = "draw";
    }
    if(x === 0 && y === 1 || x===1 && y === 2||x === 2 && y === 0){
        win.innerText = "you win";
        l = l+1;
        var str = l.toString();
        youmark.innerText = (str);
    }
    if(y === 0 && x === 1 || y === 1 && x === 2||y === 2 && x === 0){
        win.innerText = "computer win";
        m = m+1;
        var str = m.toString();
        opponentmark.innerText = (str);
    }
    setTimeout(() => {
        youselected.innerText = "";
        oppo.innerText = "";
        win.innerText = "";
        button.disabled = false;
        som = false;
    }, 2000);
})
function getRandomInt(max) {
    return  (Math.floor(Math.random() * max)) % max;
}


  




