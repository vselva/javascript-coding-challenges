function fibonacci(n) {
  if (n <= 1) return 1;
  fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(10));
// [0, 1, 1, 2, 3, 5, 8, ...]
