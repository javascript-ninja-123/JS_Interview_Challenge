//Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false.
//Only these two letters will be entered in the string, no punctuation or numbers.
//For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

//example x
//result false

//example xoxo
//result true


const ExOh = str => {
  let resultArray = str.split('').reduce((acc,val) => {
    if(acc[val]) acc[val] += 1;
    else acc[val] = 1;
    return acc;
  },{})
  return resultArray.x === resultArray.o ? true : false
}

module.exports = {
  ExOh
}
