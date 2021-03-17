function inverseWhile() {
  var i = 5;
  var fiveNumbers = "";
  while (i >= 0) {
    fiveNumbers += i;

    if (i != 0) {
      fiveNumbers += ",";
    }
    i--;
  }
  return fiveNumbers;
}

console.log(inverseWhile());
module.exports = inverseWhile;
