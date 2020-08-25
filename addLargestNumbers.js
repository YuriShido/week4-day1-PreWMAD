const addLargestNumbers = function(data) {
  // let max = addLargestNumbers.reduce([data])
  // import java.util.Arrays;
  // import java.util.Collections;
  // array1 = [data]
  // array2 = array01.clone()
  // for(i = 0; i < data.length; i++)
  // let array = [data];
  // data.sort(function(a, b){return b - a}); //これも正解
  // console.log(data[0] + data[1]); //これも
  // Put your solution here
  let largerstNumber = - Infinity;
  let SecoundNumber = - Infinity
  for(i = 0; i < data.length; i++) {
  if (data[i] > largerstNumber){
    SecoundNumber = largerstNumber
    largerstNumber = data[i];
  }
   else if(data[i] > SecoundNumber && data[i] < largerstNumber){
    SecoundNumber = data[i];
  }
}
   return largerstNumber + SecoundNumber

};

console.log(addLargestNumbers([1, 10]));
console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));