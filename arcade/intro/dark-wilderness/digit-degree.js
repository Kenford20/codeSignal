// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

// Example

// For n = 5, the output should be
// digitDegree(n) = 0;
// For n = 100, the output should be
// digitDegree(n) = 1.
// 1 + 0 + 0 = 1.
// For n = 91, the output should be
// digitDegree(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.

function digitDegree(n) {
    if(n < 10) return 0;
    
    function sumDigits(num){
        num = num.toString();
        let sum = 0;
        for(let i = 0; i < num.length; i++){
            sum += parseInt(num[i]);
        }
        return sum;
    }
    let degree = 0;
    
    while(n >= 10){
        n = sumDigits(n);
        degree++;
    }
    return degree;
}
