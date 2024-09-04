const sumAll = function(min , max) {
  let total=0;

  
  if (min<0 || max<0){
    return "ERROR";
  }
  if (min>max){
    const temp = min;
    min = max;
    max = temp;
  }
  
  for (let i =min; i<=max ; i++){
    total+=i;
  }
  
  return total;
}


// Do not edit below this line
module.exports = sumAll;
