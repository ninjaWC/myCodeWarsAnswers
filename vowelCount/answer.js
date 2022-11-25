function getCount(str) {
  var amount=0;
  
  for(let i=0;i<str.length; i++){
    if(str[i] == 'a' || str[i] =='e'|| str[i] =='i'|| str[i] =='o'|| str[i] =='u'){
      amount= amount + 1;
    }
  }
  return amount;
}

getCount("abracadabra");