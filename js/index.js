var can1, can2
var ctx1, ctx2
var lastTime, deltaTime
var canWidth, canHeight
var bgPic, ane, fruit
var mom, baby
var mx, my
var babyTail = []
var babyEye = []
var babyBody = []
var momTail = []
var momEye = []
var momBodyBlue = []
var momBodyOrange = []
var data, wave, halo
var dust
var dustPic = []
document.body.onload = game

function game() {
  init()
  lastTime = Date.now()
  deltaTime = 0
  gameloop()
}

function init(params) {
  can1 = document.querySelector('#canvas1')
  ctx1 = can1.getContext('2d')
  can2 = document.querySelector('#canvas2')
  ctx2 = can2.getContext('2d')

  can1.addEventListener('mousemove', onMouseMove, false)
  canWidth = can1.width
  canHeight = can1.height

  bgPic = new Image()
  bgPic.src = './img/background.jpg'

  ane = new aneObj();
  ane.init()

  fruit = new fruitObj()
  fruit.init()

  mom = new momObj()
  mom.init()

  baby = new babyObj()
  baby.init()

  mx = canWidth * 0.5
  my = canHeight * 0.5

  for (let i = 0; i < 8; i++) {
    momTail[i] = new Image()
    momTail[i].src = './img/bigTail' + i + '.png'
  }
  for (let i = 0; i < 2; i++) {
    momEye[i] = new Image()
    momEye[i].src = './img/bigEye' + i + '.png'
  }
  for (let i = 0; i < 8; i++) {
    momBodyBlue[i] = new Image()
    momBodyBlue[i].src = './img/bigSwimBlue' + i + '.png'
    momBodyOrange[i] = new Image()
    momBodyOrange[i].src = './img/bigSwim' + i + '.png'
  }

  for (let i = 0; i < 8; i++) {
    babyTail[i] = new Image()
    babyTail[i].src = './img/babyTail' + i + '.png'
  }
  for (let i = 0; i < 2; i++) {
    babyEye[i] = new Image()
    babyEye[i].src = './img/babyEye' + i + '.png'
  }
  for (let i = 0; i < 20; i++) {
    babyBody[i] = new Image()
    babyBody[i].src = './img/babyFade' + i + '.png'
  }

  data = new dataObj()
  wave = new waveObj()
  halo = new haloObj()
  wave.init()
  halo.init()

  for (let i = 0; i < 7; i++) {
    dustPic[i] = new Image()
    dustPic[i].src = './img/dust' + i + '.png'

  }
  dust = new dustObj()
  dust.init()
}

function gameloop(params) {
  requestAnimationFrame(gameloop)
  var now = Date.now()
  deltaTime = now - lastTime
  lastTime = now
  if (deltaTime > 40) deltaTime = 40
  drawBackground()
  ane.draw()
  fruitMonitor()
  fruit.draw()
  ctx1.clearRect(0, 0, canWidth, canHeight)
  mom.draw()
  momFruitsCollision()
  momBabyCollision()
  baby.draw()
  data.draw()
  wave.draw()
  halo.draw()
  dust.draw()
}

function onMouseMove(e) {
  if (data.gameOver) return
  if (e.offSetX || e.layerX) {
    mx = e.offSetX === undefined ? e.layerX : e.offSetX
    my = e.offSetY === undefined ? e.layerY : e.offSetY
  }
}
