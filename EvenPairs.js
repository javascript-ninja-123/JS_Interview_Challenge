//Have the function EvenPairs(str) take the str parameter being passed and
//determine if a pair of adjacent even numbers exists anywhere in the string.
//If a pair exists, return the string true, otherwise return false. For example:
//if str is "f178svg3k19k46" then there are two even numbers at the end of the string,
//"46" so your program should return the string true. Another example: if str is "7r5gg812"
//then the pair is "812" (8 and 12) so your program should return the string true.
//example 5678dddd
//output true

const EvenPairs = str => {
  str = str.split('').map(value => parseInt(value))
  let result;
  const reduceFunc = (strArr,re) => {
    re === 'reduce' ?  result = str.reduce((acc,val,index,arr) => {
          if(!isNaN(val)) acc.push(val)
          else if(isNaN(val))arr.splice(0)
          return acc;
        },[]).reduce((acc,val,index) => {
          acc.push(val)
          return acc;
        },[]).join('') : result = str.reduceRight((acc,val,index,arr) => {
              if(!isNaN(val)) acc.push(val)
              else if(isNaN(val))arr.splice(0)
              return acc;
            },[]).reduceRight((acc,val,index) => {
              acc.push(val)
              return acc;
            },[]).join('')
  }
  if(isNaN(str[str.length -1])){
      reduceFunc(str,'reduce')
  }
  else{
    reduceFunc(str,'reduceRight')
  }



  return parseInt(result) % 2 === 0 ? true : false;
}


module.exports = {
  EvenPairs
}
