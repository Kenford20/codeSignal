// Define a multiplication table of size n by m as follows: such table consists of n rows and m columns. Cell on the intersection of the ith row and the jth column (i, j > 0) contains the value of i * j.

// Given integers n and m, find the number of different values that are found in the table.

// Example

// For n = 3 and m = 2, the output should be
// differentValuesInMultiplicationTable2(n, m) = 5.

function differentValuesInMultiplicationTable2(n, m) {
    let uniqueValues = [];
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(!uniqueValues.includes(i*j)) {
                uniqueValues.push(i*j);
            }
        }
    }
    return uniqueValues.length;
}
