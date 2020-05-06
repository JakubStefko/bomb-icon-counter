var realDate = document.getElementById('real-date')

setInterval(function () {
  realDate.innerHTML =
    new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
}, 1000)
