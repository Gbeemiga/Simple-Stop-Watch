const time = document.querySelector(`.watch .time`)
const stopBtn = document.getElementById(`stop-btn`)
const startBtn = document.getElementById(`start-btn`)
const resetBtn = document.getElementById(`reset-btn`)
const restartBtn = document.querySelector(`.restart`)


let seconds = 0;
let interval = null;


const timer = () => {
    seconds++

    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds - (hours * 3600)) / 60)
    let secs = (seconds % 60)
    
    if (secs < 10) secs = `0` + secs
    if (minutes < 10) minutes = `0` + minutes
    if (hours < 10) hours = `0` + hours

    time.innerText = `${hours}:${minutes}:${secs}`
}


const start = () => {
    if (interval) return
    interval = setInterval(timer, 1000)
}


const stop = () => {
    clearInterval(interval)
    interval = null
}

const reset = () => {
    stop()
    seconds = 0
    time.innerText = `00:00:00`
}

const restart = () => {
    stop()
    seconds = 0
    time.innerText = `00:00:00`
    start()
}

startBtn.addEventListener(`click`, () => start())
stopBtn.addEventListener(`click`, () => stop())
resetBtn.addEventListener(`click`, () => reset())
window.addEventListener(`contextmenu`, (evt) => {
    evt.preventDefault()
})
resetBtn.addEventListener(`contextmenu`, (evt) => {
    restart()
})



























// let seconds = 0;
// let interval = null;

// function timer () {
//     seconds++;


//     let hours = Math.floor(seconds / 3600);
//     let mins = Math.floor((seconds - (hours * 3600)) /  60)
//     let secs = seconds % 60

//     if (secs < 10)  secs = '0' + secs
//     if (mins < 10)  mins = '0' + mins
//     if (hours < 10)  hours = '0' + hours

//     time.innerText = `${hours}:${mins}:${secs}`
// }


// function start (){
//     if (interval) { 
//         return
        
//     }
    
//     interval = setInterval(timer, 1000);
// }



// function stop () {

//     clearInterval(interval);
//     interval = null

// }

// function reset () {   
//     stop()
//     seconds = 0
//     time.innerText = `00:00:00`
// }

// function restart () {   
//     stop()
//     seconds = 0
//     time.innerText = `00:00:00`
//     start()
// }


// startBtn.addEventListener(`click`, start);
// stopBtn.addEventListener(`click`, stop);
// resetBtn.addEventListener(`click`, reset);
// resetBtn.addEventListener(`dblclick`, restart);
// resetBtn.addEventListener(`mouseenter`, () => {
//     someText.classList.add(`show`)
// });
// resetBtn.addEventListener(`mouseleave`, () => {
//     someText.classList.remove(`show`)
// });