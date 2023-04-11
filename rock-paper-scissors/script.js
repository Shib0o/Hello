const choose_rock = document.querySelector('.choose_rock')
const choose_paper = document.querySelector('.choose_paper')
const choose_scissors = document.querySelector('.choose_scissors')
const rock = '<img src="rock_icon.PNG" alt="rock" />'
const paper = '<img src="paper_icon.PNG" alt="paper" />'
const scissors = '<img src="scissors_icon.PNG" alt="scissors" />'
const wynik = document.querySelector('.wynik')
const test = document.querySelector('.test')
var scoreYou = 1
var scoreComputer = 1
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const choose = document.querySelector('.choose')
function randChoose() {
  var a = Math.floor(Math.random() * 3)
  switch (a) {
    case 0:
      a = '<img src="rock_icon.PNG" alt="rock" />'
      break
    case 1:
      a = '<img src="paper_icon.PNG" alt="paper" />'
      break
    case 2:
      a = '<img src="scissors_icon.PNG" alt="scissors" />'
      break
  }
  document.querySelector('.computerImage').innerHTML = a
  return a
}
function whoWin(a, b) {
  switch (a) {
    case rock:
      if (b == paper) {
        wynik.innerHTML = "Computer get's a point, paper beats rock !"
        computerScore.innerHTML = 'Computer: ' + scoreComputer++
      } else if (b == scissors) {
        wynik.innerHTML = "Player get's a point, rock beats scissors !"
        playerScore.innerHTML = 'You: ' + scoreYou++
      }
      break
    case paper:
      if (b == scissors) {
        wynik.innerHTML = "Computer get's a point, scissors beats paper !"
        computerScore.innerHTML = 'Computer: ' + scoreComputer++
      } else if (b == rock) {
        wynik.innerHTML = "Player get's a point, paper beats rock !"
        playerScore.innerHTML = 'You: ' + scoreYou++
      }
      break
    case scissors:
      if (b == rock) {
        wynik.innerHTML = "Computer get's a point, rock beats scissors !"
        computerScore.innerHTML = 'Computer: ' + scoreComputer++
      } else if (b == paper) {
        wynik.innerHTML = "Player get's a point, scissors beats paper !"
        playerScore.innerHTML = 'You: ' + scoreYou++
      }
      break
  }
  if (a == b) {
    wynik.innerHTML = "Draw, nobody get's a point !"
  }
}
function checkIfWin() {
  if (scoreYou == 11) {
    choose_rock.remove()
    choose_paper.remove()
    choose_scissors.remove()
    setTimeout(playWin, 2000)
  }
  if (scoreComputer == 11) {
    choose_rock.remove()
    choose_paper.remove()
    choose_scissors.remove()
    setTimeout(compWin, 2000)
  }
}
function compWin() {
  test.innerHTML = 'Better luck next time !!'
  wynik.innerHTML = 'Computer Won'
  document.querySelector('.playerImage').innerHTML =
    '<img src="lose.PNG" alt="lose" />'
  document.querySelector('.computerImage').innerHTML =
    '<img src="win.PNG" alt="win" />'
}
function playWin() {
  test.innerHTML = 'Brawo !!'
  wynik.innerHTML = 'You Won'
  document.querySelector('.playerImage').innerHTML =
    '<img src="win.PNG" alt="win" />'
  document.querySelector('.computerImage').innerHTML =
    '<img src="lose.PNG" alt="lose" />'
}

function gameStart(a) {
  document.querySelector('.playerImage').innerHTML = a
  var b = randChoose()
  whoWin(a, b)
  checkIfWin()
}
choose_rock.addEventListener(
  'click',
  function () {
    gameStart(rock)
  },
  false
)
choose_paper.addEventListener(
  'click',
  function () {
    gameStart(paper)
  },
  false
)
choose_scissors.addEventListener(
  'click',
  function () {
    gameStart(scissors)
  },
  false
)
