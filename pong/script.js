const gra = document.querySelector('.gra')
const kontekst = gra.getContext('2d')
var kula = {
  x: 400,
  y: 200,
  radius: 10,
  startAngl: 0,
  endAngl: Math.PI * 2,
  velocityX: -3,
  velocityY: -3,
}
const paletka = {
  x: 0,
  y: 150,
  width: 20,
  hight: 100,
}
const komputer = {
  x: 779,
  y: 150,
  width: 20,
  hight: 100,
  velocityY: kula.velocityY,
}
const score = {
  playerSco: 0,
  computerSco: 0,
}
function render() {
  kontekst.fillStyle = 'black'
  kontekst.fillRect(0, 0, 800, 400)
  kontekst.fillStyle = 'white'
  kontekst.fillRect(paletka.x, paletka.y, paletka.width, paletka.hight)

  for (let i = 15; i <= 400; i += 30) {
    kontekst.fillStyle = 'white'
    kontekst.fillRect(395, i, 10, 15)
  }

  kontekst.fillStyle = 'white'
  kontekst.font = '75px fantasy'
  kontekst.fillText(score.playerSco, 200, 100)
  kontekst.fillStyle = 'white'
  kontekst.font = '75px fantasy'
  kontekst.fillText(score.computerSco, 575, 100)

  kontekst.fillStyle = 'white'
  kontekst.fillRect(komputer.x, komputer.y, komputer.width, komputer.hight)

  kontekst.fillStyle = 'white'
  kontekst.beginPath()
  kontekst.arc(kula.x, kula.y, kula.radius, kula.startAngl, kula.endAngl, false)
  kontekst.closePath()
  kontekst.fill()
  paletkaColision()
  boxColision()
  kulaMove()
  komputerFollow()
}
function paletkaColision() {
  if (kula.y >= paletka.y && kula.y <= paletka.y + 100 && kula.x <= 30) {
    kula.velocityY = -(paletka.y + 50 - kula.y) / 10
    kula.velocityX = -kula.velocityX + 0.5
  }
  if (kula.y >= komputer.y && kula.y <= komputer.y + 100 && kula.x >= 770) {
    kula.velocityX = -kula.velocityX - 0.5
  }
}
function boxColision() {
  if (kula.y <= 5) {
    kula.velocityY = -kula.velocityY
  } else if (kula.y >= 390) {
    kula.velocityY = -kula.velocityY
  }
  boxScore()
}
function boxScore() {
  if (kula.x <= 10) {
    kula.x = 400
    kula.y = 200
    kula.velocityX = -3
    kula.velocityY = -3
    score.computerSco++
  }
  if (kula.x >= 790) {
    kula.x = 400
    kula.y = 200
    kula.velocityX = 3
    kula.velocityY = 3
    score.playerSco++
  }
}
function kulaMove() {
  kula.x += kula.velocityX
  kula.y += kula.velocityY
}
function komputerFollow() {
  if (komputer.y + 50 <= kula.y) {
    komputer.velocityY = 2.8
    komputer.y += komputer.velocityY
  }
  if (komputer.y + 50 >= kula.y) {
    komputer.velocityY = -2.8
    komputer.y += komputer.velocityY
  }
  if (komputer.y >= 300) {
    komputer.velocityY = 0
    komputer.y = 300
  } else if (komputer.y <= 0) {
    komputer.velocityY = 0
    komputer.y = 0
  }
}
function up() {
  paletka.y -= 10
  if (paletka.y == -10) {
    paletka.y += 10
  }
}
function down() {
  paletka.y += 10
  if (paletka.y + 100 == 410) {
    paletka.y -= 10
  }
  console.log(klawisz.key)
}
setInterval(render, 1000 / 60)
window.addEventListener('keydown', (klawisz) => {
  if (klawisz.key == 'w') {
    up()
  } else if (klawisz.key == 's') {
    down()
  }
})
