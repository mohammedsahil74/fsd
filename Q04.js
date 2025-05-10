// Factorial function using recursion
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

// Test cases
console.log("factorial(0):", factorial(0));  // 1
console.log("factorial(1):", factorial(1));  // 1
console.log("factorial(5):", factorial(5));  // 120
console.log("factorial(10):", factorial(10)); // 3628800

// Error handling example
try {
  console.log("factorial(-1):", factorial(-1)); // This will cause a stack overflow
} catch (error) {
  console.log("Error with negative input:", error.message);
}