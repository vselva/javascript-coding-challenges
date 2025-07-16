const isPalindrom = (string) => {
  // checking whether it is a string
  if (typeof string !== "string") {
    return false;
  }

  // input validation
  if (string === "" || string === null || string === undefined) {
    return false;
  }

  // to lowercase
  string = string.toLowerCase(string);

  // remove non alpha numeric
  string = string.replace(/[^a-z0-9]/gi, "");

  // checking the reversed is same or not
  const reversed = string.split("").reverse().join("");
  if (string === reversed) {
    return true;
  }

  return false;
};

console.log(isPalindrom("Was it a car or a cat I saw?"));
