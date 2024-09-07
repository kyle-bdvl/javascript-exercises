const palindromes = function (string) {
  let reverse ="";
  //make the string into a char i guess 
  for (let i =string.length; i>0; i--){
    reverse += string.chatAt(i)
  }
  if (reverse == string)
    return true;
  else 
    return false;

};

// Do not edit below this line
module.exports = palindromes;
