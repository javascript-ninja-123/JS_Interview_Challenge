//example 'sungmin yi'
//result 'iy nimgnus'

const firstReverse = str => {
  str = str.split('');
  let newArray = [];
  for(let i=str.length -1 ; i >= 0; i--){
    newArray.push(str[i]);
  }
  return newArray.join('');
}


const firstReverseFunctial = str => {
  str = str.split('');
  return str.reduceRight((acc,val) => {
      acc.push(val);
      return acc;
  },[]).join('')
}

module.exports = {
  firstReverse,
  firstReverseFunctial
}
