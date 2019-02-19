// Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

// The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.

// Example

// For number = 'G', the output should be
// newNumeralSystem(number) = ["A + G", "B + F", "C + E", "D + D"].

// Translating this into the decimal numeral system we get: number = 6, so it is ["0 + 6", "1 + 5", "2 + 4", "3 + 3"].

function newNumeralSystem(number) {
    let headCharCode = 65;
    let tailCharCode = number.charCodeAt();
    let numeralArr = [];

    for(let i = 0; i <= Math.floor((number.charCodeAt() - 65) / 2); i++) {
        numeralArr.push(String.fromCharCode(headCharCode) + ' + ' + String.fromCharCode(tailCharCode));
        headCharCode++;
        tailCharCode--;
    }
    return numeralArr;
}
