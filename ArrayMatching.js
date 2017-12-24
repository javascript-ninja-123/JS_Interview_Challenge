//Have the function ArrayMatching(strArr) read the array of strings stored in
//strArr which will contain only two elements, both of which will represent an array of
//positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"],
//then both elements in the input represent two integer arrays, and your goal for
//this challenge is to add the elements in corresponding locations from both arrays.
//For the example input, your program should do the following additions:
//[(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should finally
//return this resulting array in a string format with each element separated by a hyphen: 6-4-13-17.

//If the two arrays do not have the same amount of elements, then simply
//append the remaining elements onto the new array (example shown below). 
//Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will exist in each array

//Google
//Input:"[5, 2, 3]", "[2, 2, 3, 10, 6]"
//Output:"7-4-6-10-6"
//Input:"[1, 2, 1]", "[2, 1, 5, 2]"
//Output:"3-3-6-2"

const ArrayMatching = strArr => {
  const first = JSON.parse(strArr[0]),
        second = JSON.parse(strArr[1]);
  const newArray = first.length > second.length ? first : second;
  const secondArray = newArray === first ? second : first;
  return newArray.reduce((acc,val,index,arr) => {
    if(secondArray[index] !== undefined){
      val = val + secondArray[index];
      acc.push(val);
    }
    else {
      acc.push(newArray[index])
    }
    return acc;
  },[]).map((value,index,arr) => {
    if(index === 0 && arr.length > 1) return `${value}-`
    else if(arr.length >=1 && index === 0 ) return value
    else if(index !== arr.length-1) return `${value}-`
    else if(value === arr[arr.length-1]) return value
  }).join('')
}


module.exports ={
  ArrayMatching
}
