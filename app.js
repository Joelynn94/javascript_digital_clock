// reference to the clock div
const clock = document.querySelector('.clock');


// clock function 
function tick(){

    const time = new Date();
    const currentDate = new Date(); 

    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();
    let suffix = "AM";
    // displays current date
    let date = currentDate.toDateString();

    // adds suffix for PM
    suffix = (hours >= 12) ? "PM" : suffix;

    // IF check using ternary operators 
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    hours = (hours < 10) ? "0" + hours : hours;

    // 12-hour format - the number of hours should not be greater than 12. So, 12 is deducted from the number of hours if it is greater than 12
    hours = (hours === 0) ? 12 : ((hours > 12) ? (hours - 12) : hours);

    // html template
    const html = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span> ${suffix}   
    <div>
        <h6>${date}</h6>
    </div>
    `;

    clock.innerHTML = html;

} // ends tick() function

// calls the tick function every second to update the time
setInterval(tick, 1000);




// Can use IF check instead of ternary operator
    // if(seconds < 10){
    //     seconds = "0" + seconds;
    // } 
    
    // if(minutes < 10){
    //     minutes = "0" + minutes;
    // }

    // if(hours < 10){
    //     hours = "0" + hours;
    // }