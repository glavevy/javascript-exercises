const reverseString = function (reversed) {
  reversedArray = reversed.split("");
  let arrayReversed = [""];
  for (let i = 0; i < reversed.length; i++) {
    //let lastElement = reversed.split(-1);
    let lastElement = reversedArray.pop();
    arrayReversed += lastElement;
  }
  return arrayReversed.toString();
};

// Do not edit below this line
module.exports = reverseString;

//for every element of reversed
//get the last one
//add last one to arrayReversed
//and then - 1 of reversed
