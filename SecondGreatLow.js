//Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space.
//For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers.
//It can get tricky if there's just two numbers!

//example [100, 200, 3, 400, 5, 1]
//result 3 200

const SecondGreatLow = arr => {
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  let result = arr.filter(value => value !== maxNum && value !== minNum)
  if(result.length <=0) return `${arr[0]} ${arr[1]}`;
  else {
    let resultMaxNum = Math.max(...result)
    let resultMinNum = Math.min(...result);
    return `${resultMinNum} ${resultMaxNum}`
  }
}
