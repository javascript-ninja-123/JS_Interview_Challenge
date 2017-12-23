//Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8).
// Do not count y as a vowel for this challenge.

//example coderbyte
//result 3

const VowelCount = str => {
  const vowels = 'aeiou'
  let resultArray = str.split('').reduce((acc,val) => {
    if(vowels.includes(val)) acc.push(val)
    else return acc;
    return acc
  },[])
  return resultArray.length;
}

module.exports = {
  VowelCount
}
