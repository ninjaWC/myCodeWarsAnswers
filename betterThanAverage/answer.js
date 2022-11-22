function betterThanAverage(classPoints, yourPoints) {
  var allGrades = 0;
  for(let i =0; i<classPoints.length; i++){
    allGrades = allGrades + classPoints[i];
  }
  if(allGrades/classPoints.length < yourPoints){
    return true;
  }else{
    return false;
  }
}
betterThanAverage([2,3],5);