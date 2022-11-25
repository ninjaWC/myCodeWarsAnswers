function noSpace(x){
var withoutArray = '';
  for(let i=0;i<x.length;i++){
    if(x[i] != ' '){
      withoutArray = withoutArray +x[i];
    }
  }
  return withoutArray;
}

noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');