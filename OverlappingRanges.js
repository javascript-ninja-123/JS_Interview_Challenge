//Have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers,
//the first two representing a range of numbers (a to b), the next 2 also representing another range of
//integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers.
//For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and
//the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers,
//then your program should return the string false.

//example  [4,10,5,8,2]
//result true


const OverlappingRanges = array => {
  const firstIndex = array[0],
        lastIndex = array[1],
        firstIndex2 = array[2],
        lastIndex2 = array[3],
        answerKey = array[array.length -1];

 const createArray = (a,b) => {
   let newArray = [];
   for(let i = b; i >= a;  i--){
     newArray.push(i)
   }
   return newArray.sort((a,b) => a-b)
 }

 const findDuplicate = (arr1,arr2) => {
   return arr1.reduce((acc,val,index,arr) => {
     if(arr2.includes(val)) acc.push(val);
     else return acc;
     return acc;
   },[])
 }
 let firstArray =  createArray(firstIndex,lastIndex)
     secondArray = createArray(firstIndex2,lastIndex2)
     console.log(firstArray,secondArray)
     console.log(findDuplicate(firstArray,secondArray))
     return findDuplicate(firstArray,secondArray).length >= answerKey ? true : false
}

module.exports = {
  OverlappingRanges
}
