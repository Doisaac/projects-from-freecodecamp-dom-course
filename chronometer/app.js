const chronometer = document.getElementById('chronometer')
const btnStartPause = document.getElementById('btn-start-pause')
const btnRestart = document.getElementById('btn-restart')

let [hours, minutes, seconds] = [0, 0, 0]

let timeInterval = ''
let chronometerState = 'paused'

function updateChronometer() {
  seconds++
  
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++

    if (minutes / 60 === 1) {
      hours++
      minutes = 0
    }
  }

  const secondsWithFormat = setFormat(seconds)
  const minutesWithFormat = setFormat(minutes)
  const hoursWithFormat = setFormat(hours)

  chronometer.innerText = `${hoursWithFormat}:${minutesWithFormat}:${secondsWithFormat}`

}

function setFormat(timeUnit) {
  return (timeUnit < 10)? '0' + timeUnit : timeUnit
}

btnStartPause.addEventListener('click', () => {
  if (chronometerState === 'paused') {
    timeInterval = window.setInterval(updateChronometer, 1000)
    // Changes the icon to pause 
    btnStartPause.innerHTML = '<i class="bi bi-pause-fill"></i>'
    // Changes the classes to have a different button style
    btnStartPause.classList.remove('start')
    btnStartPause.classList.add('pause')
    // Now it is running
    chronometerState = 'running'
  } else {
    // Stops the interval, thus the chronometer stops
    window.clearInterval(timeInterval)
    btnStartPause.innerHTML = '<i class="bi bi-play-fill"></i>'
    btnStartPause.classList.remove('pause')
    btnStartPause.classList.add('start')
    chronometerState = 'paused'
  }
})

btnRestart.addEventListener('click', () => {
  window.clearInterval(timeInterval)
  hours = 0
  minutes = 0
  seconds = 0
  chronometer.innerText = '00:00:00'
  btnStartPause.innerHTML = '<i class="bi bi-play-fill"></i>'
  btnStartPause.classList.remove("pause")
  btnStartPause.classList.add("start")
  chronometerState = "paused"
})

