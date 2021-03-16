function inverseWhile() {
  var fiveNumbers;
  var i = 4;
  while (i >= 0) {
    if (fiveNumbers === undefined) {
      fiveNumbers = i + 1;
    }
    fiveNumbers = fiveNumbers + "," + i;
    i--;
  }
  return fiveNumbers;
}

console.log(inverseWhile());
module.exports = inverseWhile;
