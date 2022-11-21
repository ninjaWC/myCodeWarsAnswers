// Sum Numbers
function sum (numbers) {
  "use strict";
var result = 0;
  if(numbers === 0)return 0;
  else{
      for(let i=0; i<numbers.length; i++){
        result = result + numbers[i];
      }
    return result;
  }
};
sum([1, 5.2, 4, 0, -1]);