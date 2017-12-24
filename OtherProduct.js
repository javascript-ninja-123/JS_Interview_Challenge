//Have the function OtherProducts(arr) take the array of numbers stored in arr and return a
//new list of the products of all the other numbers in the array for each element.
//For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array
// is the product of all other elements, is [120, 60, 40, 30, 24]. The following calculations were
//performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)].
//You should generate this new array and then return the numbers as a
//string joined by a hyphen: 120-60-40-30-24. The array will contain at most 10 elements and at least
//1 element of only positive integers.



//Google
//example [3,1,2,6]
//result "12-36-18-6"

const OtherProducts = array => {
  const getIndex = selectedIndex => {
    return array.reduce((acc,val,index) => {
      if(index === selectedIndex) return acc;
      else acc.push(val);
      return acc;
    },[]).reduce((acc,val) => {
      acc *= val;
      return acc;
    },1)
  }
  return array.reduce((acc,val,i,arr) => {
    val = getIndex(i);
    if(acc.length >=0) acc.push(val);
    else if(val === arr[arr.length -1]) acc.push(val)
    else acc.push(val)
    return acc
  },[]).map((value,index,arr) => {
    if(index === 0) return `${value}-`;
    else if(value !== arr[arr.length -1] || index !== arr.length-1) return `${value}-`
    else if(value === arr[arr.length -1]) return value;
  }).join('')
}

module.exports = {
  OtherProducts
}
