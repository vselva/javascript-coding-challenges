function factorial(n) {
  let fac = 1;
  if (n == 1) return 1;
  for (let i = 2; i <= n; i++) {
    fac = fac * i;
  }
  return fac;
}

console.log(factorial(5));
