const sumAll = function (a, b) {
  let sum = 0;
  let len,
    addB = b,
    addA = a;
  if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") {
    return "ERROR";
  } else if (a > b) {
    len = a - b;
    for (let i = 0; i <= len; i++) {
      sum += addB;
      addB++;
    }
  } else if (a < b) {
    len = b - a;
    for (let i = 0; i <= len; i++) {
      sum += addA;
      addA++;
    }
  } else if (a === b) {
    sum = a + b;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

//typeof a === "string" ||
//typeof b === "string" ||
//typeof a === "object" ||
//typeof b === "object"
