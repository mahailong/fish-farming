var can1, can2, ctx1, ctx2
document.body.onload = game

function game() {
  init()
}

function init(params) {
  can1 = document.querySelector('#canvas1')
  ctx1 = can1.context()
  can2 = document.querySelector('#canvas2')
  ctx2 = can2.context()
}

function gameloop(params) {
  requestAnimationFrame(gameloop)

}
