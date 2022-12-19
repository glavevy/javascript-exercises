const removeFromArray = function (input, ...numbers) {
  let g = 0;
  do {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === numbers[g]) {
        input.splice(i, 1);
      }
    }
    g++;
  } while (g < numbers.length);
  return input;
};

// Do not edit below this line
module.exports = removeFromArray;
//  let i=0;
//  do{
//    if (input[i] === numbers[g]) {
//      input.splice(i, 1);
//    }
//    i++
//  }
//   while(i<input.length)
//   g++;
//const inputArray = input.toString().split(",");
//const numbersArray = numbers.toString().split(",");
//trqbva da proveri za vsqko i ot input array dali e ravno na vsqko i ot numbersarray
//for every number in inputarray
//check if its equal to the first number in numbersarray
//if yes pop it out
//if no check if every number is equal to i+1 in the
//while numbersLength == 0 break; while(g<numbersLength)
//check if any character matches
//if it does pop it out
//  const numbersArray = numbers.split("");
//let inputArray = input.split("");
//for (i = 0; i < input.length; i++) {
//  if (input[i].slice(-1) == numbers) {
//    input = inputArray[i].pop();
//  } else {
//    return "This isnt working";
//  }
//return input;
