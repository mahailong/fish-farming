// 判断大鱼和果实的距离
function momFruitsCollision(params) {
  if (data.gameOver) return
  for (let i = 0; i < fruit.num; i++) {
    if (fruit.alive[i]) {
      var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y)
      if (l < 900) {
        fruit.dead(i)
        data.fruitNum++;
        mom.bodyCount++;
        if (mom.bodyCount > 7) mom.bodyCount = 7
        if (fruit.fruitType[i] == "blue") {
          data.double = 2
        }
        wave.born(fruit.x[i], fruit.y[i])
      }
    }
  }
}
// 判断大鱼和小鱼的距离
function momBabyCollision(params) {
  if (!data.fruitNum || data.gameOver) return
  var l = calLength2(mom.x, mom.y, baby.x, baby.y)
  if (l < 900) {
    baby.bodyCount = 0
    mom.bodyCount = 0
    data.addScore()
    halo.born(baby.x, baby.y)
  }
}
