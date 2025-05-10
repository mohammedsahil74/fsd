// Curry function implementation
function curry(fn) {
  // Get the number of arguments the original function expects
  const numArgs = fn.length;
  
  // Return a function that will collect arguments
  function collectArgs(...args) {
    // If we have enough arguments, execute the original function
    if (args.length >= numArgs) {
      return fn(...args);
    }
    
    // Otherwise, return a new function that collects more arguments
    return function(...moreArgs) {
      return collectArgs(...args, ...moreArgs);
    };
  }
  
  return collectArgs;
}

// Test with add function
function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);

// Test different ways of calling the curried function
console.log("curriedAdd(5)(10):", curriedAdd(5)(10)); // 15
console.log("curriedAdd(5, 10):", curriedAdd(5, 10)); // 15

// More complex example with 3 arguments
function calculateTotal(price, taxRate, discount) {
  return price * (1 + taxRate) * (1 - discount);
}

const curriedCalculate = curry(calculateTotal);

// Using the curried function step by step
const withPrice = curriedCalculate(100);              // Set price to $100
const withTax = withPrice(0.07);                      // Add 7% tax
const finalPrice = withTax(0.1);                      // Apply 10% discount

console.log("Final price:", finalPrice);              // 96.3 (100 * 1.07 * 0.9)

// Alternatively, call it all at once
console.log("All at once:", curriedCalculate(100)(0.07)(0.1)); // 96.3