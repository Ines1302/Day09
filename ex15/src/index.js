function myDoWhile() {
  var i = 0;
  var myNumbers = "";
  do {
    myNumbers += i;
    if (i != 9) {
      myNumbers += ", ";
    }
    i++;
  } while (i < 10);
  return myNumbers;
}

myDoWhile();

console.log(myDoWhile());
module.exports = myDoWhile;
