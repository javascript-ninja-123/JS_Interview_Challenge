//Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once
//(ie. "lane borrowed" would result in true because there is exactly three characters between a and b).
// Otherwise return the string false.

//example "after badly"
//result false

//example Laura sobs
//result true


//with map
const ABCheck = str => {
  const newResult = [];
  str.split('')
  .map((value,index,arr) => {
    if(value === 'a'){
      newResult.push( arr[index+4])
      newResult.push(arr[index-4])
    }
    else return;
  })
  return newResult.some(value => {
    if(value === 'b') return true;
    else return false
  })
}

//with reduce
const ABCheck2 = str => {
  let newResult = str.split('').reduce((acc,val,index,arr) => {
    if(val === 'a'){
      let front = arr[index-4],
          back = arr[index+4];
      acc.push(front,back)
    }
    else return acc;
    return acc;
  },[])
  return newResult.some(value => value === 'b')
}

module.exports = {
  ABCheck,
  ABCheck2
}
