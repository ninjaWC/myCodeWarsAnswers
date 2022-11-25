function firstNonConsecutive (arr) {
  var numberArr = 0;
for(let i = 1; i<arr.length; i++){
  if((arr[i-1]+1) != arr[i]) return arr[i];
}
return null;
}

firstNonConsecutive ([1,2,3,4,6,7,8]);