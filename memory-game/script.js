const gameBox = document.querySelector('.gameBox')
const gameEng = document.querySelector('.gameEng')
function gameSta() {
  gameBox.innerHTML = null
  let pickCou = 0
  let elementPic = [null, null]
  let elementDiv = [null, null]
  let goodCho = 0
  let attemptChe = 0
  let goodBlo = [null, null, null, null, null, null]
  let blockBox = false
  let solvedTil = [[null]]
  for (let box = 0; box < 6; box++) {
    gameBox.innerHTML += '<div class="gameTil"></div>'
  }
  gameBox.innerHTML +=
    '<div class="gameSco"><div class="gameSta">Twoje próby:<div class="statCou">' +
    attemptChe +
    '</div></div><div class="gameBut"></div></div>'
  const numberImg = [0, 1, 2, 3, 4, 5]
  const shuffledImg = numberImg.sort((a, b) => 0.5 - Math.random())
  const gameSco = document.querySelector('.gameSco')
  const gameTil = document.querySelectorAll('.gameTil')
  function gameChe(tileNum) {
    if (blockBox == true) {
      return
    }
    gameTil[tileNum].setAttribute(
      'style',
      'background-image: url("img_' +
        shuffledImg[tileNum] +
        '.jpg");background-size: cover;background-position: center;'
    )
    elementPic[pickCou] = shuffledImg[tileNum]
    elementDiv[pickCou] = tileNum
    gameTil[0].good = tileNum
    gameTil[1].good = tileNum
    pickCou++
    if (pickCou === 2) {
      blockBox = true
      if (elementDiv[0] != elementDiv[1]) attemptChe++
      gameSco.innerHTML =
        '<div class="gameSta">Twoje próby:<div class="statCou">' +
        attemptChe +
        '</div></div><div class="gameBut"></div>'
      if (
        (elementPic[0] === 0 && elementPic[1] === 5) ||
        (elementPic[0] === 1 && elementPic[1] === 3) ||
        (elementPic[0] === 2 && elementPic[1] === 4) ||
        (elementPic[0] === 5 && elementPic[1] === 0) ||
        (elementPic[0] === 3 && elementPic[1] === 1) ||
        (elementPic[0] === 4 && elementPic[1] === 2)
      ) {
        blockBox = false
        goodCho++
      } else if (elementDiv[0] != elementDiv[1]) {
        setTimeout(function () {
          gameTil[elementDiv[0]].setAttribute(
            'style',
            'background-color: bisque;'
          )
          gameTil[elementDiv[1]].setAttribute(
            'style',
            'background-color: bisque;'
          )
        }, 800)
      }
      if (goodCho === 3) {
        return setTimeout(function () {
          alert('Brawo wygrałeś w ' + attemptChe + ' próbach!')
          gameSta()
        }, 800)
      }
      pickCou = 0
      setTimeout(function () {
        blockBox = false
      }, 700)
    }
  }
  for (let tileNum = 0; tileNum < 6; tileNum++) {
    gameTil[tileNum].addEventListener(
      'click',
      (testFun = function () {
        gameChe(tileNum)
      })
    )
  }
}
gameEng.addEventListener('click', gameSta, false)
