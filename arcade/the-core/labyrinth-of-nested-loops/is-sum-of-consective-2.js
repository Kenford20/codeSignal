// Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

function isSumOfConsecutive2(n) {
    let ways = 0;
    for(let i = 1; i < n/2; i++){ // i < n/2 to avoid repeated/swapped addends
        let sum = i;
        let addend = i+1;

        while(sum < n){ // add consecutive addends until sum is > n
            sum += addend;
            addend++;
        }    
        if(sum === n)
            ways++;
    }
    return ways;
}
