//Have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return
//its multiplicative persistence which is the number of times you must multiply
//the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3
//because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.

//example 4
//result 0

//example 39
//result 3


const MultiplicativePersistence = (num, counter = 0) => {
  let newNum = num.toString().split('').map(value => parseInt(value))
  const multipleReduce = numArr => {
    counter++;
    return numArr.reduce((acc,val) => {
      if(acc.length <= 0) acc.push(val);
      else{
        let prev = acc.shift();
        acc.pop();
        acc.push(prev * val);
      }
      return acc;
    },[])
  }
  let resultArr =  multipleReduce(newNum);
  if(resultArr[0].toString().length === 1 && resultArr[0] !== num) return counter;
  if(resultArr[0].toString().length === 1 && resultArr[0] === num) return 0;
  else{
    return MultiplicativePersistence(resultArr[0],counter)
  }
}


module.exports = {
  MultiplicativePersistence
}
