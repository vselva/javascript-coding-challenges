const isAnagram = (first, second) => {
  first = first.split('').sort().join('');
  second = second.split('').sort().join('');
  return first === second;
}

console.log(isAnagram("selva", "lvase"));
