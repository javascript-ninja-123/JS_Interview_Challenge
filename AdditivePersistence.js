//Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit.
//For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.

//example 4
// result 0

//example 2718
//result 2

const AdditivePersistence = (num,counter = 0) => {
  let newNum = num.toString().split('').map(value => Number(value))
  const addReduce = numArr => {
    counter ++;
    return numArr.reduce((acc,val,index,arr) => {
       if(acc.length <= 0) acc.push(val);
      else{
        let prev = acc.shift();
        acc.pop();
        acc.push(prev+val);
      }
      return acc;
   },[])
  }
  const result = addReduce(newNum)
  if(result[0].toString().length ===1 && result[0] !== num) return counter;
  if(result[0] === num) return 0;
  else{
    return AdditivePersistence(result[0],counter)
  }
}


module.exports = {
  AdditivePersistence
}
