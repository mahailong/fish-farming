var babyObj = function() {
  this.x
  this.y
  this.angle

  this.tailTimer = 0
  this.tailCount = 0

  this.eyeTimer = 0
  this.eyeCount = 0
  this.eyeInterval = 1000

  this.bodyTimer = 0
  this.bodyCount = 0
}

babyObj.prototype.init = function() {
  this.x = canWidth * 0.5 - 50
  this.y = canHeight * 0.5 + 50
  this.angle = 0
}

babyObj.prototype.draw = function() {
  // lerp x,y
  this.x = lerpDistance(mom.x, this.x, 0.99);
  this.y = lerpDistance(mom.y, this.y, 0.99);
  // delta angle
  // Math.atan2(y, x)
  var deltaY = mom.y - this.y
  var deltaX = mom.x - this.x
  var beta = Math.atan2(deltaY, deltaX) + Math.PI

  //lerp angle
  this.angle = lerpAngle(beta, this.angle, 0.6)

  // baby tail
  this.tailTimer += deltaTime
  if (this.tailTimer > 50) {
    this.tailCount = (this.tailCount + 1) % babyTail.length
    this.tailTimer %= 50
  }

  // baby eye
  this.eyeTimer += deltaTime
  if (this.eyeTimer > this.eyeInterval) {
    this.eyeCount = (this.eyeCount + 1) % babyEye.length
    this.eyeTimer %= this.eyeInterval
    if (this.eyeCount === 0) {
      this.eyeInterval = Math.random() * 1500 + 3000
    } else {
      this.eyeInterval = 50
    }
  }

  // baby body
  this.bodyTimer += deltaTime
  if (this.bodyTimer > 300) {
    this.bodyCount = this.bodyCount + 1
    this.bodyTimer %= 300
    if (this.bodyCount > 19) {
      this.bodyCount = 19

      data.gameOver = true
    }
  }

  ctx1.save()
  ctx1.translate(this.x, this.y)
  ctx1.rotate(this.angle)
  var tail = babyTail[this.tailCount]
  var eye = babyEye[this.eyeCount]
  var body = babyBody[this.bodyCount]
  ctx1.drawImage(tail, -tail.width * 0.5 + 23, -tail.height * 0.5)
  ctx1.drawImage(body, -body.width * 0.5, -body.height * 0.5)
  ctx1.drawImage(eye, -eye.width * 0.5, -eye.height * 0.5)
  ctx1.restore()
}
