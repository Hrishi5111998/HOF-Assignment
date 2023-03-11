
let timeDelay = 3
let timeLeft = timeDelay

let countDown = setInterval(function(){
    console.log("Time left :" + timeLeft + " seconds");
    timeLeft--

    if(timeLeft === 0){
        clearInterval(countDown)
        let randomNum = Math.floor(Math.random() * 100) 
        console.log("Random number generated " + randomNum)
    }
}, 1000)

