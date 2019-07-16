// Call two integers a and b similar if divisor divides both a and b or if it doesn't divide either.

// Given integers a, b and divisor, check if a and b are similar.

// Example

// For a = 10, b = 12, and divisor = 2, the output should be
// areSimilarNumbers(a, b, divisor) = true;
// For a = 10, b = 12, and divisor = 3, the output should be
// areSimilarNumbers(a, b, divisor) = false.

function areSimilarNumbers(a, b, divisor) {
    return (a % divisor === 0 && b % divisor === 0) || 
           (a % divisor !== 0 && b % divisor !== 0);
}
