function squareDigits(num){
  var arrayOfNum = String(num);
  var firstTransl = 0;
  var secTransl = 0;
  var doubledNum = 0;
  for(let i = 0; i<arrayOfNum.length; i++){
    firstTransl = Number(arrayOfNum[i]);
    secTransl= firstTransl * firstTransl;
    secTransl = String(secTransl);
    doubledNum = doubledNum + secTransl;
  }
  return Number(doubledNum); 
}
squareDigits(3212);