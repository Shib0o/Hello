// Gra
const can = document.querySelector('.canvas')
const ctx = can.getContext('2d')
const gravity = 0.1
let vector = 0
// Tekstury
const texture = {
  height: 428,
  width: 606,
}
const image = new Image()
image.src = 'img/sprite.png'
// Obiekty
const bird = {
  x: 50,
  y: 150,
  w: 34,
  h: 26,
  animation: [
    { aX: 276, aY: 112 },
    { aX: 276, aY: 139 },
    { aX: 276, aY: 164 },
    { aX: 276, aY: 139 },
  ],
  frame: 0,
  speed: 0,
}
const background_1 = {
  imageX: 0,
  imageY: 0,
  w: 276,
  h: 228,
  x: 0,
  y: can.height - 228,
  speed: 1,
}
const background_2 = {
  x: background_1.w,
}
const background_3 = {
  x: background_1.w * 2,
}
const soil_1 = {
  imageX: 276,
  imageY: 0,
  w: 500 - background_1.w,
  h: 112,
  x: 0,
  y: can.height - 112,
  speed: 2,
}
const soil_2 = {
  x: soil_1.w,
}
const soil_3 = {
  x: soil_1.w * 2,
}
const soil_4 = {
  x: soil_1.w * 3,
}
const soil_5 = {
  x: soil_1.w * 4,
}
const soil_6 = {
  x: soil_1.w * 5,
}
// Rysowanie i nadpisywanie oraz inne czynności
function draw() {
  ctx.fillStyle = '#70c5ce'
  ctx.fillRect(0, 0, can.width, can.height)
  drawBackground()
  drawSoil()
  drawBird()
  birdGravi()
  colision()
}
function drawBackground() {
  ctx.drawImage(
    image,
    background_1.imageX,
    background_1.imageY,
    background_1.w,
    background_1.h,
    background_1.x,
    background_1.y,
    background_1.w,
    background_1.h
  )
  ctx.drawImage(
    image,
    background_1.imageX,
    background_1.imageY,
    background_1.w,
    background_1.h,
    background_2.x,
    background_1.y,
    background_1.w,
    background_1.h
  )
  ctx.drawImage(
    image,
    background_1.imageX,
    background_1.imageY,
    background_1.w,
    background_1.h,
    background_3.x,
    background_1.y,
    background_1.w,
    background_1.h
  )
}
function drawSoil() {
  ctx.drawImage(
    image,
    soil_1.imageX,
    soil_1.imageY,
    soil_1.w,
    soil_1.h,
    soil_1.x,
    soil_1.y,
    soil_1.w,
    soil_1.h
  )
  ctx.drawImage(
    image,
    soil_1.imageX,
    soil_1.imageY,
    soil_1.w,
    soil_1.h,
    soil_2.x,
    soil_1.y,
    soil_1.w,
    soil_1.h
  )
  ctx.drawImage(
    image,
    soil_1.imageX,
    soil_1.imageY,
    soil_1.w,
    soil_1.h,
    soil_3.x,
    soil_1.y,
    soil_1.w,
    soil_1.h
  )
  ctx.drawImage(
    image,
    soil_1.imageX,
    soil_1.imageY,
    soil_1.w,
    soil_1.h,
    soil_4.x,
    soil_1.y,
    soil_1.w,
    soil_1.h
  )
  ctx.drawImage(
    image,
    soil_1.imageX,
    soil_1.imageY,
    soil_1.w,
    soil_1.h,
    soil_5.x,
    soil_1.y,
    soil_1.w,
    soil_1.h
  )
  ctx.drawImage(
    image,
    soil_1.imageX,
    soil_1.imageY,
    soil_1.w,
    soil_1.h,
    soil_6.x,
    soil_1.y,
    soil_1.w,
    soil_1.h
  )
}
// Ptak jego reakcje i kolizja

function drawBird() {
  if (bird.speed >= 0 && vector <= 90) {
    vector += 2
  }
  let birdAnimation = bird.animation[bird.frame % 4]
  ctx.save()
  ctx.translate(bird.x, bird.y)
  ctx.rotate((vector * Math.PI) / 180)
  ctx.drawImage(
    image,
    birdAnimation.aX,
    birdAnimation.aY,
    bird.w,
    bird.h,
    -bird.w / 2,
    -bird.h / 2,
    bird.w,
    bird.h
  )
  ctx.restore()
}

function birdGravi() {
  bird.y += bird.speed
  bird.speed += gravity
}
function colision() {
  if (bird.y >= soil_1.y - bird.w / 2) bird.y = soil_1.y - bird.w / 2 + 2
  else if (bird.y <= 13) {
    bird.y = 13
  }
}
function birdReact() {
  bird.speed = 0
  bird.y -= 80
  vector = -45
}

// Uaktualnianie X i Y obiektów
function movement() {
  backgroundMove()
  soilMove()
}
function backgroundMove() {
  background_1.x -= background_1.speed
  background_2.x -= background_1.speed
  background_3.x -= background_1.speed
  if (background_1.x == -276) {
    background_1.x = 276 * 2
  }
  if (background_2.x == -276) {
    background_2.x = 276 * 2
  }
  if (background_3.x == -276) {
    background_3.x = 276 * 2
  }
}
function soilMove() {
  soil_1.x -= soil_1.speed
  if (soil_1.x == -soil_1.w) {
    soil_1.x = soil_1.w * 5
  }
  soil_2.x -= soil_1.speed
  if (soil_2.x == -soil_1.w) {
    soil_2.x = soil_1.w * 5
  }
  soil_3.x -= soil_1.speed
  if (soil_3.x == -soil_1.w) {
    soil_3.x = soil_1.w * 5
  }
  soil_4.x -= soil_1.speed
  if (soil_4.x == -soil_1.w) {
    soil_4.x = soil_1.w * 5
  }
  soil_5.x -= soil_1.speed
  if (soil_5.x == -soil_1.w) {
    soil_5.x = soil_1.w * 5
  }
  soil_6.x -= soil_1.speed
  if (soil_6.x == -soil_1.w) {
    soil_6.x = soil_1.w * 5
  }
}
function update() {
  draw()
  movement()
  // Liczenie klatek
  bird.frame++
  requestAnimationFrame(update)
}
update()
window.addEventListener('click', birdReact)
