var can1, can2, ctx1, ctx2
var lastTime, deltaTime
var canWidth, canHeight
var bgPic, ane, fruit, mom
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
}

function gameloop(params) {
  requestAnimationFrame(gameloop)
  var now = Date.now()
  deltaTime = now - lastTime
  lastTime = now

  drawBackground()
  ane.draw()
  fruitMonitor()
  fruit.draw()
  ctx1.clearRect(0, 0, canWidth, canHeight)
  mom.draw()
}
