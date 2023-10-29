let time = document.querySelector(".time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const lap = document.querySelector(".lap");
const ol = document.getElementsByTagName('ol')[0];
let second=0,minute=0,hour=0;
function watch(){
second++;
if(second==60){
    second=0;
    minute++
    if(second==60){
        minute=0;
        hour++;
    }
}
let s = second < 10 ? "0"+second : second;
let m = minute < 10 ? "0"+minute : second;
let h = hour < 10 ? "0"+hour : second;
time.innerText = h+":"+m+":"+s;
}
let ehlel;
start.addEventListener('click',()=>{
    ehlel = setInterval(watch,1000);
});
stop.addEventListener('click',()=>{
    clearInterval(ehlel);
});
reset.addEventListener('click',()=>{
    clearInterval(ehlel);
    second=0
    minute=0
    hour=0;
    time.innerText="00:00:00"
})
lap.addEventListener( 'click',()=>{  
    let s = second < 10 ? "0"+second : second;
    let m = minute < 10 ? "0"+minute : second;
    let h = hour < 10 ? "0"+hour : second;
    let lapEL = document.createElement('p');
    lapEL.innerText = h+":"+m+":"+s;
    let timer = document.querySelector('.watch');
    timer.append(lapEL);
}
);


