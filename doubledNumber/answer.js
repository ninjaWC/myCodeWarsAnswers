function maps(x){
  var array =[];
  for(let i=0;i<x.length;i++){
    let doubledArray = x[i]*2;
    array.push(doubledArray);
  }
  return array;
}

maps(1,2,3);