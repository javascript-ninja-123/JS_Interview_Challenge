//Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3).
//Separate the number of hours and minutes with a colon.
//example  45
//result 0:45
//example 126
//result  2:6

const TimeConvert = num => {
  let hour = num / 60 >= 1 ? (num / 60).toString().charAt(0) : 0;
  let min =  num / 60 >= 1 ? num % 60 : num;
  return `${hour}:${min}`
}


module.exports = {
  TimeConvert
}
