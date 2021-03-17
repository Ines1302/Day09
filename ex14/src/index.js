function myForLoop1() {
  var evenNumbers;
  for (let i = 1; i < 5; i++) {
    var x = 2 * i;
    if (evenNumbers === undefined) {
      evenNumbers = "0";
    }
    evenNumbers = evenNumbers + ", " + x;
  }
  return evenNumbers;
}

function myForLoop2() {
  var evenInverseNumbers;
  for (let i = 1; i < 5; i++) {
    var x = 2 * (4-i);
    if (evenInverseNumbers === undefined) {
      evenInverseNumbers = "8";
    }
    evenInverseNumbers = evenInverseNumbers + ", " + x;
  }
  return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());
module.exports = {
  myForLoop1,
  myForLoop2,
};
