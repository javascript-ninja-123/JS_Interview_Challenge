//Have the function NonrepeatingCharacter(str) take the str parameter being passed,
//which will contain only alphabetic characters and spaces, and return the first non-repeating character.
//For example: if str is "agettkgaeee" then your program should return k. The string will always contain
//at least one character and there will always be at least one non-repeating character.

//example hello world hi hey
//output w

const NonrepeatingCharacter = str => {
  let resultArray = [];
  str = str.split('')
  let result =  str.reduce((acc,val,index,arr) => {
    if(acc.has(val)) acc.set(val,acc.get(val) + 1)
    else acc.set(val,1)
    return acc;
  },new Map())
  console.log(result)
  result.forEach((value,key,map) => {
    if(value ===1) resultArray.push(key);
    else return;
  });
  return resultArray[0];
}
