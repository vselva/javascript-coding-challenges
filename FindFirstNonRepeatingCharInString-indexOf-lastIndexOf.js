
const findFirstNonRepeatingChar = (string) => {
  var char = '';
  for (let i = 0; i <= string.length; i++) {
    const char = string[i];
    if(string.indexOf(char) === string.lastIndexOf(char)) {
      return char;
    }
  }
  return char;
}

console.log(findFirstNonRepeatingChar("112222333345677788889999"));
