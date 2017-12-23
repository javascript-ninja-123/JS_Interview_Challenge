//Have the function SwapCase(str) take the str parameter and swap the case of each character.
//For example: if str is "Hello World" the output should be hELLO wORLD.
//Let numbers and symbols stay the way they are.

//example Sup DUDE!!?
//result sUP dude!!?


const SwapCase = str => {
  return  str.split('').reduce((acc,val) => {
    if(val.match(/^[a-z]*$/)){
      acc.push(val.toUpperCase())
    }
    else if(val.match(/^[A-Z]*$/)){
        acc.push(val.toLowerCase())
    }
    else acc.push(val)
    return acc;
  },[]).join('')
}

module.exports = {
  SwapCase
}
