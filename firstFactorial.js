//example firstFactorial(4) = 4 * 3 * 2 * 1

const firstFactorial = num => {
  if(num === 0) return 1;
  else return num * firstFactorial(num -1)
}

module.exports = {
  firstFactorial
}
