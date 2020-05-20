// *** algorithm variables ***
var endDate = new Date(2020, 4, 21, 22, 10, 0, 0).getTime()
var currentDate = endDate - new Date().getTime()
var days, minutes, seconds
const interval = 1000 // call function interval time in ms (1s by default)

// *** html fields ***
var realDate = document.getElementById('real-date')
var day = document.getElementById('day')
var hour_0 = document.getElementById('1')
var hour_1 = document.getElementById('2')
var minute_0 = document.getElementById('3')
var minute_1 = document.getElementById('4')
var second_0 = document.getElementById('5')
var second_1 = document.getElementById('6')

function updateDate() {
  // *** calculating time left to the event ***
  days = ('0' + Math.floor(currentDate / 86400000)).slice(-2)
  hours = ('0' + Math.floor((currentDate % 86400000) / 3600000)).slice(-2)
  minutes = ('0' + Math.floor((currentDate % 3600000) / 60000)).slice(-2)
  seconds = ('0' + Math.floor((currentDate % 60000) / 1000)).slice(-2)

  realDate.innerHTML =
    'Days: ' +
    days[0] +
    days[1] +
    ', ' +
    hours[0] +
    hours[1] +
    ':' +
    minutes[0] +
    minutes[1] +
    ':' +
    seconds[0] +
    seconds[1]

  hour_0.setAttribute('class', 'icon-' + hours[0])
  hour_1.setAttribute('class', 'icon-' + hours[1])
  minute_0.setAttribute('class', 'icon-' + minutes[0])
  minute_1.setAttribute('class', 'icon-' + minutes[1])
  second_0.setAttribute('class', 'icon-' + seconds[0])
  second_1.setAttribute('class', 'icon-' + seconds[1])

  currentDate -= interval
}

updateDate()

setInterval(updateDate, interval)
