const repeatString = function(string, num) {
  let repeat ='';
  let count=0;
  if (num <0){
    repeat="ERROR"
    
  }
  else{
    while (count<num){
      repeat+=string;
      count++;
    }
  }
  return repeat;

};

// Do not edit below this line
module.exports = repeatString;
