//Have the function BitwiseTwo(strArr) take the array of strings stored in strArr,
//which will only contain two strings of equal length that represent binary numbers,
//and return a final binary string that performed the bitwise AND operation on both strings.
//A bitwise AND operation places a 1 in the new string where there is a 1 in both locations
//in the binary strings, otherwise it places a 0 in that spot. For example: if strArr is ["10111", "01101"]
// then your program should return the string "00101"


//example ["10100", "11100"]
//result  10100

const BitwiseTwo = strArr => {
  const firstEle = strArr[0].split(''),
        secondEle = strArr[1].split('');

  return firstEle.reduce((acc,val,index,arr) => {
    if(val === secondEle[index]) acc.push(val);
    else if(val !== secondEle[index] && val === '0') acc.push('0')
    else acc.push('0')
    return acc;
  },[]).join('')
}

module.exports = {
  BitwiseTwo
}
