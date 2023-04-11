const calcMon = document.querySelector('.calcMon')
const calcBut = document.querySelectorAll('.calcBut')
let calcOne = document.querySelector('.calcOne')
let calcCal
function calcCli() {
  if (this.value <= 9) calcMon.innerHTML += String(this.value)
  if (this.value === 'reset') calcMon.innerHTML = null

  if (this.value === 'equal' && calcOne != null) {
    switch (calcCal) {
      case '-':
        calcMon.innerHTML = Number(calcOne) - Number(calcMon.innerHTML)
        break
      case '*':
        calcMon.innerHTML = Number(calcOne) * Number(calcMon.innerHTML)
        break
      case '/':
        if (calcMon.innerHTML != 0) {
          calcMon.innerHTML = Number(calcOne) / Number(calcMon.innerHTML)
        } else {
          calcMon.innerHTML = 'DivideByZero'
        }
        break
      case '+':
        calcMon.innerHTML = Number(calcOne) + Number(calcMon.innerHTML)
        break
      case '**':
        calcMon.innerHTML = Number(calcOne) ** Number(calcMon.innerHTML)
        break
      case '*/':
        calcMon.innerHTML =
          Math.round(
            Number(calcOne) ** (1 / Number(calcMon.innerHTML)) * 1000
          ) / 1000
        break
    }
    calcOne = null
  }
  switch (this.value) {
    case '+':
      calcCal = String(this.value)
      calcOne = calcMon.innerHTML
      calcMon.innerHTML = ''
      break
    case '-':
      calcCal = String(this.value)
      calcOne = calcMon.innerHTML
      calcMon.innerHTML = ''
      break
    case '*':
      calcCal = String(this.value)
      calcOne = calcMon.innerHTML
      calcMon.innerHTML = ''
      break
    case '/':
      calcCal = String(this.value)
      calcOne = calcMon.innerHTML
      calcMon.innerHTML = ''
      break
    case '**':
      calcCal = String(this.value)
      calcOne = calcMon.innerHTML
      calcMon.innerHTML = ''
      break
    case '*/':
      calcCal = String(this.value)
      calcOne = calcMon.innerHTML
      calcMon.innerHTML = ''
      break
  }
}
calcBut.forEach((calcBut) => {
  calcBut.addEventListener('click', calcCli)
})
