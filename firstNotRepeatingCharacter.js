const firstNotRepeatingCharacter = str => {
  const stringArray = str.split('')
  let resultArray = [];
   stringArray.reduce((acc,val) => {
    if(acc[val]){
      resultArray = resultArray.filter(value => value !== val);
      acc[val] +=1;
    }
    else{
      acc[val] = 1;
      resultArray.push(val);
    }
    return acc;
  },{})
  if(resultArray.length > 0){
     return resultArray[0];
  }
  else{
    return '_';
  }
}

moudle.exports = {firstNotRepeatingCharacter};
