const playbutton =document.getElementsByClassName("play")[0];
const lapbutton =document.getElementsByClassName("lap")[0];
const restbutton =document.getElementsByClassName("reset")[0];
const clearButton =document.getElementsByClassName("lap-clear-button")[0];
const minute =document.getElementsByClassName("minute")[0];
const second =document.getElementsByClassName("sec")[0];
const Centisecond =document.getElementsByClassName("msec")[0];
const laps =document.getElementsByClassName("laps")[0];
const bg =document.getElementsByClassName("outer-circle")[0];
let isPlay=false;
let secCounter =0;
let min;
let sec;
let centisec;
let centiCounter=0;
let minCounter=0;
let isReset=false;
let lapItem=0;
const toggleButton = () =>{
    lapbutton.classList.remove('hidden');
    restbutton.classList.remove('hidden');
}

const play=()=>{
    if (!isPlay && !isReset) {
        playbutton.innerHTML ="Pause";
        bg.classList.add("animation-bg")
        min = setInterval(()=>{
                minute.innerHTML=`${++minCounter} :`;
            },60*1000);
        sec = setInterval(()=>{
            if(secCounter===60){
                secCounter=0;
            }
            second.innerHTML =`&nbsp;${++secCounter} :`;
               },1000);
               centisec = setInterval(()=>{
                if (centiCounter ===100) {
                    centiCounter=0;
                }
                Centisecond.innerHTML =`&nbsp;${++centiCounter} `;
                   },10);
        isPlay = true;
        isReset=true;
    }else{
        playbutton.innerHTML ="Play";
       clearInterval(sec)
       clearInterval(centisec);
        isPlay=false;
        isReset=false;
        bg.classList.remove("animation-bg")
    }
    toggleButton();
}

const reset = () => {
    isReset=true;
    play();
    lapbutton.classList.add('hidden');  
    restbutton.classList.add('hidden');
   second.innerHTML ='&nbsp;0 :'
   playbutton.innerHTML ="Play";
   secCounter=0;
   Centisecond.innerHTML='&nbsp;0';
   minute.innerHTML=`&nbsp;0 :`;
   lapItem=0;
   laps.innerHTML = " ";
   laps.append(clearButton);
    clearButton.classList.add("hidden");
} 

const lap = () =>{
    const li =document.createElement("li");
    const number =document.createElement("span");
    const timeStamp =document.createElement("span");

li.setAttribute("class" ,"lap-item");
number.setAttribute("class","number");
timeStamp.setAttribute("class","time-stamp");
number.innerText =`${++lapItem} => `
timeStamp.innerHTML =`${minCounter} : ${secCounter} : ${centiCounter}`;
li.append(number,timeStamp);
laps.append(li);
clearButton.classList.remove("hidden");
}
const clearAll = () =>{
    laps.innerHTML = " ";
    laps.append(clearButton);
    clearButton.classList.add("hidden");
}
playbutton.addEventListener("click",play);
restbutton.addEventListener("click",reset);
lapbutton.addEventListener("click",lap);
clearButton.addEventListener("click",clearAll)
