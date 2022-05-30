const dday = document.querySelector(".d-day");
const cInput1 = document.querySelector(".inpt1");
const cInput2 = document.querySelector(".inpt2");
const cBtn = document.querySelector(".input-btn");
const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

cBtn.addEventListener('click',main);

function main(event)
{
    event.preventDefault();

    dday.innerHTML=cInput1.value;
    const newYear = cInput2.value;

    saveLocal(dday.innerHTML,newYear);

function countDown()
{
    const newYearsDate=new Date(newYear);
    const currentDate=new Date();
    const miniSec=newYearsDate-currentDate;
    const days=Math.floor(miniSec/1000/24/3600);
    const hours=Math.floor(miniSec/1000/3600)%24;
    const minutes=Math.floor(miniSec/1000/60)%60;
    const seconds=Math.floor(miniSec/1000)%60;

    dayEl.innerHTML=formatTime(days);
    hourEl.innerHTML=formatTime(hours);
    minuteEl.innerHTML=formatTime(minutes);
    secondEl.innerHTML=formatTime(seconds);
    
}
function formatTime(time)
{
    return time < 10 ? `0${time}`:time;
}
countDown();
cInput1.value=cInput2.value="";
setInterval(countDown,1000);
}

