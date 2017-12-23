//Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome,
//(the string is the same forward as it is backward) otherwise return the string false.
//For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

//example eye
//result true


const Palindrome = str => {
  let newStr = str = str.split('').filter(value => value.match(/^[a-zA-Z]*$/))
  let reversedStr = newStr.reduceRight((acc,val) => {
    acc.push(val)
    return acc;
  },[])
  return newStr.join('') === reversedStr.join('') ? true : false;
}


module.exports = {
  Palindrome
}
