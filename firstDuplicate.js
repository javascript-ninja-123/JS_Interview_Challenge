const firstDuplicate = a => {
  if(!Array.isArray(a)) return 'Input is not an array';
  let resultArray = [];
  let result = a.reduce((acc,val) => {
    if(acc[val]){
      if(acc[val] === 1){
        resultArray.push(val)
      }
      acc[val] +=1
    }
    else {
      acc[val] = 1;
    }
    return acc;
  }, {})
  if(resultArray.length > 0){
    return resultArray.shift()
  }
  else{
    return -1;
  }
}

moudle.exports = {firstDuplicate};
