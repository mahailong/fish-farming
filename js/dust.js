var dustObj = function() {
  this.x = []
  this.y = []
  this.amp = []
  this.NO = []
  this.alpha = 0
}
dustObj.prototype.num = 30
dustObj.prototype.init = function() {
  for (let i = 0; i < this.num; i++) {
    this.x[i] = Math.random() * canWidth
    this.y[i] = Math.random() * canHeight
    this.amp[i] = 20 + Math.random() * 25
    this.NO[i] = Math.floor(Math.random() * dustPic.length)
  }
}
dustObj.prototype.draw = function() {
  this.alpha += deltaTime * 0.0008
  var l = Math.sin(this.alpha)
  for (let i = 0; i < this.num; i++) {
    var pic = dustPic[this.NO[i]]
    ctx2.drawImage(pic, this.x[i] + this.amp[i] * l, this.y[i])
  }
}
