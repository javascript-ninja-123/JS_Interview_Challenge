//Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains
//(e.g. "Never eat shredded wheat or cake" would return 6).
//Words will be separated by single spaces.


//example one 22 three
//result 3

const WordCount = str => {
  let strArray = str.split(' ')
  return strArray.length;
}

module.exports = {
  WordCount
}
