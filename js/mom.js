var momObj = function() {
  this.x
  this.y
  this.angle
  this.bigEye = new Image()
  this.bigBody = new Image()
  this.bigTail = new Image()

  this.tailTimer = 0
  this.tailCount = 0

  this.eyeTimer = 0
  this.eyeCount = 0
  this.eyeInterval = 1000

  this.bodyCount = 0
}
momObj.prototype.init = function() {
  this.x = canWidth * 0.5
  this.y = canHeight * 0.5
  this.angle = 0
  this.bigEye.src = './img/bigEye0.png'
  this.bigBody.src = './img/bigSwim0.png'
  this.bigTail.src = './img/bigTail0.png'
}
momObj.prototype.draw = function() {
  // lerp x,y
  this.x = lerpDistance(mx, this.x, 0.985);
  this.y = lerpDistance(my, this.y, 0.985);
  // delta angle
  // Math.atan2(y, x)
  var deltaY = my - this.y
  var deltaX = mx - this.x
  var beta = Math.atan2(deltaY, deltaX) + Math.PI

  //lerp angle
  this.angle = lerpAngle(beta, this.angle, 0.6)

  this.tailTimer += deltaTime
  if (this.tailTimer > 50) {
    this.tailCount = (this.tailCount + 1) % momTail.length
    this.tailTimer %= 50
  }

  this.eyeTimer += deltaTime
  if (this.eyeTimer > this.eyeInterval) {
    this.eyeCount = (this.eyeCount + 1) % momEye.length
    this.eyeTimer %= this.eyeInterval
    if (this.eyeCount === 0) {
      this.eyeInterval = Math.random() * 1500 + 3000
    } else {
      this.eyeInterval = 50
    }
  }
  var tail = momTail[this.tailCount]
  var eye = momEye[this.eyeCount]
  var body = data.double === 1 ? momBodyOrange[this.bodyCount] : momBodyBlue[this.bodyCount]
  ctx1.save()
  ctx1.translate(this.x, this.y)
  ctx1.rotate(this.angle)
  ctx1.drawImage(tail, -tail.width * 0.5 + 30, -tail.height * 0.5)
  ctx1.drawImage(body, -body.width * 0.5, -body.height * 0.5)
  ctx1.drawImage(eye, -eye.width * 0.5, -eye.height * 0.5)
  ctx1.restore()
}
