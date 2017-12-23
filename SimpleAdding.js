//For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10.
// For the test cases, the parameter num will be any number from 1 to 1000.
//example simpleAdding(4)
// result 10

const simpleAdding = num => {
  if(num === 0) return 0;
  else return num + simpleAdding(num -1)
}

module.exports = {
  simpleAdding
}
