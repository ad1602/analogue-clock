console.log('this is clock.js');

const secondHand=document.querySelector('.sec-hand');
const minutesHand=document.querySelector('.min-hand');
const hoursHand=document.querySelector('.hour-hand');

function setdate(){
    const now = new Date();
    
    const seconds= now.getSeconds();
    const secondsDegrees=(seconds/60)*360 + 90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;


    mins=now.getMinutes();
    const minutesDegrees=(mins/60)* 360 +90;
    minutesHand.style.transform=`rotate(${minutesDegrees}deg)`;

    const hours=now.getHours();
    const hoursDegrees=(hours/12) * 360 +90;
    hoursHand.style.transform=`rotate(${hoursDegrees}deg)`;

}

setInterval(setdate,1000);