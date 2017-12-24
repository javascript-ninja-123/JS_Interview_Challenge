//Have the function HammingDistance(strArr) take the array of strings
//stored in strArr, which will only contain two strings of equal length
//and return the Hamming distance between them. The Hamming distance is the number
//of positions where the corresponding characters are different.
//For example: if strArr is ["coder", "codec"] then your program should return 1.
//The string will always be of equal length and will only contain lowercase characters from
//the alphabet and numbers.


//example "10011", "10100"
//result 3

//example "helloworld", "worldhello"
//result 8


const HammingDistance = strArr => {
  const firstWord = strArr[0],
        secondWord = strArr[1],
        compareTwoWords = (word1,word2) => {
          const newArray = [];
          const newWord1 = word1.toString().split('');
          const newWord2 = word2.toString().split('');
          newWord1.forEach((value,index) => {
            if(value !== newWord2[index]) newArray.push(value);
            else return;
          })
          return newArray;
        }
        return compareTwoWords(firstWord,secondWord).length
}


module.exports = {
  HammingDistance
}
