function past(h, m, s){
  var hour =3600000;
  var minute = 60000;
  var seconds =1000;
  return (hour*h)+(minute*m)+(seconds*s);
}
past(0, 1, 1);