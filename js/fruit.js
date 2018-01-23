var fruitObj = function() {
  this.alive = []
  this.orange = new Image()
  this.blue = new Image()
  this.x = []
  this.y = []
  this.l = []
  this.spd = []
  this.fruitType = []
}
fruitObj.prototype.num = 30
fruitObj.prototype.init = function() {
  for (let i = 0; i < this.num; i++) {
    this.alive[i] = false
    this.x[i] = 0
    this.y[i] = 0
    this.spd[i] = Math.random() * 0.017 + 0.003
    this.fruitType[i] = ''
    this.born(i)
  }
  this.orange.src = './img/fruit.png'
  this.blue.src = './img/blue.png'
}
fruitObj.prototype.draw = function() {
  for (let i = 0; i < this.num; i++) {
    if (!this.alive[i]) continue
    var pic = this.fruitType[i] === 'orange' ? this.orange : this.blue
    if (this.l[i] < 14) this.l[i] += this.spd[i] * deltaTime
    else this.y[i] -= this.spd[i] * 3 * deltaTime
    ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i])
    if (this.y[i] < 10) {
      this.alive[i] = false
    }
  }
}
fruitObj.prototype.born = function(i) {
  var aneID = Math.floor(Math.random() * ane.num)
  this.x[i] = ane.x[aneID]
  this.y[i] = canHeight - ane.len[aneID]
  this.l[i] = 0
  this.alive[i] = true
  var ran = Math.random()
  this.fruitType[i] = ran < 0.3 ? 'blue' : 'orange'
}

function fruitMonitor() {
  var num = 0
  for (let i = 0; i < fruit.num; i++) {
    if (fruit.alive[i]) num++
  }
  if (num < 15) {
    sendFruit()
    return
  }
}

function sendFruit(params) {
  for (let i = 0; i < fruit.num; i++) {
    if (!fruit.alive[i]) {
      fruit.born(i)
      return
    }
  }
}
