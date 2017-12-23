////example 'I love Sam'
/// result: love


const longestWord = str => {
  str = str.split(' ').map(value => value.replace(/[^a-zA-Z0-9]/g,''))
  return str.reduce((acc,val,index) => {
    if(acc.length === 0){
      acc.push(val)
    }
    else if(val.length > acc[0].length){
      acc.pop();
      acc.push(val);
    }
    else if(val.length <= acc[0].length){
      return acc;
    }
    return acc;
  },[])
}

module.exports = {longestWord}
