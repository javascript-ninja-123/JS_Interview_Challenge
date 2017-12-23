//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
//Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
//example "fun times!"
//result  "gvO Ujnft!"

const LetterChanges = str => {
  //create a string array
  str = str.split('');
  //function to filter vowel
  const filterVowel = str => {
     let resultArray = ['a','e','i','o','u'].filter(value => value === str);
     if(resultArray.length > 0) return true;
     else return false;
  }
  //function to capitalize
  const capitalizeLetter = str => {
    return str.toUpperCase();
  }
  //loop each string and replace
  return str.reduce((acc,val) => {
    if(val.match(/^[a-zA-Z]*$/)){
      const newCharCode = val.charCodeAt() + 1;
      const newVal = String.fromCharCode(newCharCode);
      if(filterVowel(newVal)){
        let capitalizedVal = capitalizeLetter(newVal);
        acc.push(capitalizedVal);
      }
      else acc.push(newVal);
    }
    else acc.push(val)
    return acc;
  },[]).join('')
}


module.exports = {
  LetterChanges
}
