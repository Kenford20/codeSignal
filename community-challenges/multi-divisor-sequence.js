// Let's define a multi-divisor sequence as a sequence of at least 2 numbers where each number is either

// a divisor of the previous number, or
// a multiple of the number before that
// So [10, 5, 20, 4] is a multi-divisor sequence (5 is a divisor of 10, 20 is a multiple of 10, and 4 is a divisor of 20), but [3, 7, 11] isn't (none of these numbers are divisors or multiples of each other).

// Given a sequence of numbers, your task is to find the first element where it fails to be a multi-divisor sequence. Or return -1 if the whole thing is a multi-divisor sequence

// Example
// For nums = [3, 1, 6, 2, 42, 21, 7] the output should be multiDivisorSequence(nums) = -1.
// This is a multi-divisor sequence the whole way through.

// For nums = [35, 5, 35, 25, 7, 175] the output should be multiDivisorSequence(nums) = 7.

function multiDivisorSequence(nums) {    
    for(let i = 1; i < nums.length; i++){
        if(nums[i-1] % nums[i] !== 0 && nums[i] % nums[i-2] !== 0)
            return nums[i];
    }
    return -1;
}
