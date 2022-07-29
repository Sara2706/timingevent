// getting dats from html
const sec = document.querySelector(".min");
const milliSec = document.querySelector(".sec");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

// sec,min and timer
let secEl = 0;
let milliSecEl = 0;
let timeStart;

// start btn
start.addEventListener("click",()=>{
    clearInterval(timeStart);
    // timer
    timeStart = setInterval(time,100);
})

// pause btn
pause.addEventListener("click",()=>{
    clearInterval(timeStart);
})

// reset btn 
reset.addEventListener("click",()=>{
    clearInterval(timeStart);
    milliSecEl = 0;
    secEl = 0;
    milliSec.innerHTML = `0${milliSecEl}`;
    sec.innerHTML = `0${secEl}`;
})

// start time
function time(){
    milliSecEl++;
    if (milliSecEl < 10) {
        milliSec.innerHTML =`0${milliSecEl}`;
    }else{
        milliSec.innerHTML = milliSecEl;
        if(milliSecEl == 100){
            milliSecEl = 0;
            secEl++;
            if (secEl < 10) {
                sec.innerHTML =`0${secEl}`;
            }else{
                sec.innerHTML = secEl;
            }
        }
    }
   
   
    
}