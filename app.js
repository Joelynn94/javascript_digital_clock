// reference to the clock div
const clock = document.querySelector('.clock');

// clock function 
function tick(){

    const date = new Date();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    // if(seconds < 10){
    //     seconds = "0" + seconds;
    // } 
    
    // if(minutes < 10){
    //     minutes = "0" + minutes;
    // }

    // if(hours < 10){
    //     hours = "0" + hours;
    // }

    // IF check using ternary operators 
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    hours = (hours < 10) ? "0" + hours : hours;

    const time = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>    
    `;

    clock.innerHTML = time;

} // ends tick() function

// calls the tick function every second to update the time
setInterval(tick, 1000);