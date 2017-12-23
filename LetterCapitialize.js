//example hello world
//result Hello World

const LetterCapitalize = str => {
  return str.split(' ').reduce((acc,val) => {
      val = val.charAt(0).toUpperCase() + val.slice(1);
      acc.push(val)
    return acc;
  },[]).join(' ')
}

module.exports = {
  LetterCapitalize
}
