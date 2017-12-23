//Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo).
//Assume numbers and punctuation symbols will not be included in the string.

//example hooplah
//result ahhloop

const AlphabetSoup = str => {
  return str.split('').slice().sort().join('')
}

module.exports = {
  AlphabetSoup
}
