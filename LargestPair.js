//Have the function LargestPair(num) take the num parameter
//being passed and determine the largest double digit number within the whole number.
// For example: if num is 4759472 then your program should return 94 because that is the largest
//double digit number.
//The input will always contain at least two positive digits. 

//example 101010101
// 10

const LargestPair = num => {
  num = num.toString().split('');
  let result =  num.reduce((acc,val,index,arr) => {
    if(val === arr[arr.length-1] && index === arr.length -1) return acc;
    else{
      val = `${val}${arr[index+1]}`
      acc.push(val);
    }
    return acc;
  },[]).map(value => parseInt(value))
  return Math.max(...result)
}


module.exports = {
  LargestPair
}
