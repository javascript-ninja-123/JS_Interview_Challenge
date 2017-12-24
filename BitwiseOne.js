//Have the function BitwiseOne(strArr) take the array of strings stored in strArr,
//which will only contain two strings of equal length that represent binary numbers,
//and return a final binary string that performed the bitwise OR operation on both strings.
//A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings,
//otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string
//"1101"



//["00011", "01010"]
// 01011


const BitwiseOne = strArr => {
  const firstNum = strArr[0],
        secondNum = strArr[1],
        combineTwoBinaryNum = (num1,num2) => {
          num1 = num1.toString().split(''),
          num2 = num2.toString().split('');
          return num1.reduce((acc,val,index) => {
            if(val === num2[index]) acc.push(val);
            else if(val !== num2[index] && val === '1') acc.push('1')
            else if(val !== num2[index] && num2[index] === '1') acc.push('1')
            return acc;
          },[])
        }
        return combineTwoBinaryNum(firstNum,secondNum).join('').toString();
}


module.exports = {
  BitwiseOne
}
