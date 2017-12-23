//The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol.
//So the string to the left would be false. The string will not be empty and will have at least one letter.
//example +d+=3=+s+
//result true
//example f++d+
//result false

const SimpleSymbols = str => {
  //filter a-z/A-Z function
  const filterAlphabet = str => {
    if(str.match(/^[a-zA-Z]*$/)) return true;
    else return false;
  }
  let resultArray =  str.split('').reduce((acc,val,index,arr) => {
    if(filterAlphabet(val)){
      let beforeVal = arr[index-1],
          afterVal = arr[index +1];
      if(beforeVal === '+' && afterVal === '+'){
        acc.push(true)
      }
      else acc.push(false)
    }
    else return acc;
    return acc;
  },[]);
  return resultArray.every(val => val === true)
}

module.exports = {
  SimpleSymbols
}
