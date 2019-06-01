// You have an array of non-negative integers numbers, each less than 10numbers.length. Add leading zeros if necessary so that for each i, numbers[i] has exactly numbers.length digits. Now, write these integers under each other in the same order that they appear in the input array.

// From this process, you obtain a square that consists of digits. If you read them from left to right, starting from the topmost row, and drop the leading zeros, you get the initial array. What array will you get if you read the digits from the top down, starting from the leftmost column, and ignoring leading zeros?

// Example

// For numbers = [12, 345, 67, 5], the output should be
// directionOfReading(numbers) = [0, 300, 1460, 2575].

// The square obtained in the intermediate step looks like this:

// 0012
// 0345
// 0067
// 0005

function directionOfReading(numbers) {
    let square = numbers.map(() => '');
        
    for(let i = 0; i < numbers.length; i++) {
        let num = numbers[i].toString().split('');
        let numDigits = num.length;
        
        for(let j = 0; j < numbers.length - numDigits; j++) {
            num.unshift('0');
        }
        num.map((digit, index) => square[index] += digit)
    }
    return square.map(verticalNum => parseInt(verticalNum));
}
