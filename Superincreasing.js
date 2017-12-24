//Have the function Superincreasing(arr) take the array of numbers stored
//in arr and determine if the array forms a superincreasing sequence where each
//element in the array is greater than the sum of all previous elements.
//The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54]
//then your program should return the string "true" because it forms a superincreasing sequence.
//If a superincreasing sequence isn't formed, then your program should return the string "false"

//1,2,3,4
//false

//1,2,5,10
//true

const Superincreasing = array => {

  const addNums = (numIndex) => {
    return array.reduce((acc,val,index) => {
     if(index !== numIndex  && index < numIndex ) acc += val;
     else return acc;
     return acc;
   },0)
  }

  return array.reduce((acc,val,i,arr) => {
    if(acc.length === 0) acc.push(val);
    else if(addNums(i) < val ) {
      acc.push(val)
    }
    else if(addNums(i) > val) return acc;
    else return acc;
    return acc;
  },[]).length === array.length ? true : false
}

module.exports = {
  Superincreasing
}
