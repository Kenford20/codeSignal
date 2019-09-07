// Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.

// Example

// For number = 1234 and width = 2, the output should be
// integerToStringOfFixedWidth(number, width) = "34";
// For number = 1234 and width = 4, the output should be
// integerToStringOfFixedWidth(number, width) = "1234";
// For number = 1234 and width = 5, the output should be
// integerToStringOfFixedWidth(number, width) = "01234".

function integerToStringOfFixedWidth(number, width) {
    number = number.toString();
    
    if(width <= number.length) {
        return number.slice(number.length - width);
    } else {
        const numZeroes = width - number.length;
        for(let i = 0; i < numZeroes; i++) {
            number = '0' + number;
        }
        return number;
    }
}
