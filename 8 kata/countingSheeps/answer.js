function countSheeps(arrayOfSheep) {
  var result = 0;
  for(let i = 0; i<arrayOfSheep.length; i++){
    if(arrayOfSheep[i] == true){
      result ++;
    }
  }
  return result;
}

countSheeps([true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true,]);