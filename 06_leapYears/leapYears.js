const leapYears = function(year) {
  const is100Year = year %100 === 0;
  const is4years = year % 4 ===0;
  const divideBy400Years = year % 400 ===0;
  if (is4years && (!is100Year ||divideBy400Years) )
    return true;
  else
    return false;

};

// Do not edit below this line
module.exports = leapYears;
