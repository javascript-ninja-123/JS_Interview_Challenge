//Have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index
//at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing.
//For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return
//3 because 6 is the last point in the array where the numbers were increasing and the next number
//begins a decreasing sequence. The array will contain at least 3 numbers and it may contains only a single sequence,
//increasing or decreasing. If there is only a single sequence in the array, then your program should return -1.
//Indexing should begin with 0.

//example [1, 2, 4, 6, 4, 3, 1]
//result 3

//example [-4, -2, 9, 10]
//result -1




const ChangingSequence = array => {
  let resultArray =  array.reduce((acc,val,index,arr) => {
    if(val > arr[index+1]) acc.push('inc');
    else if(val < arr[index+1]) acc.push('dec');
    return acc;
  },[]);
  if(resultArray.every(value => value === 'dec'))return -1;
  else if(resultArray.every(value => value === 'inc')) return -1
  else{
    return resultArray.reduce((acc,val,i,resultArr) => {
      if(val === resultArr[i + 1]) return acc;
      else if(resultArr[i +1] === undefined ) return acc;
      else if(val !== resultArr[i+1]) acc.push(i+1)
      else return acc;
      return acc;
    },[]).join('')
  }
}


module.exports = {
  ChangingSequence
}
