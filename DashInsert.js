//Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
//For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
//example 77993
//result 7-7-9-9-3 
const DashInsert = str => {
  str = str.split('').reduce((acc,val)=> {
    val = parseInt(val);
    acc.push(val)
    return acc;
  },[])
  return str.reduce((acc,val,index,arr) => {
    if(val % 2 !== 0 && arr[index+1] % 2 !== 0){
      if(val === arr[arr.length -1])acc.push(val)
      else acc.push(val,'-');
    }
    else acc.push(val)
    return acc;
  },[]).join('');
}

module.exports = {
  DashInsert
}
