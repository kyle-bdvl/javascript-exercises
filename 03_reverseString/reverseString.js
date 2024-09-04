const reverseString = function(string) {
  let reverse='';
  for (let i=string.length;i>=0;i--){
    let  char = string.charAt(i);
    reverse = reverse+char;
  }
  return reverse;

};

// Do not edit below this line
module.exports = reverseString;
