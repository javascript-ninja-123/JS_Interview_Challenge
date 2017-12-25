//Have the function NextPalindrome(num) take the num parameter
//being passed and return the next largest palindromic number.
//The input can be any positive integer.
//For example: if num is 24, then your program
//should return 33 because that is the next largest number that is a palindrome.

//example 24
//output 33

//example 8
//example 9

const NextPalindrome = num => {
  let newArray = [];
  const Palindrome = str => {
    str = str.toString().split('');
    let result=  str.reduceRight((acc,val) => {
      acc.push(val);
      return acc;
    },[]).join('');
    return parseInt(result)
  }
  let i = num + 1
  while(i){
    if(Palindrome(i) === i){
      newArray.push(i)
      break;
    }
    else i++;
  }
  return newArray[0];
}


moudle.exports = {NextPalindrome}
