function myDoWhile() {
  var myNumbers;
  var i = 1;
  do {
    if (myNumbers === undefined) {
      myNumbers = "0";
    }
    myNumbers = myNumbers + ", " + i;
    i++;
  } while (i < 10);
  return myNumbers;
}

myDoWhile();

console.log(myDoWhile());
module.exports = myDoWhile;
