const {runFunc,run} = require('./execute');
//Arith Geo
//Check Nums
//array addition


const ThirdGreatest = strArr => {
  return strArr.reduce((acc,val) => {
    let valLength = val.length;
    acc.push(valLength);
    return acc;
  },[])
}

console.log(ThirdGreatest(["abc","defg","z","hijk"]))
