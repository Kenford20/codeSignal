// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
    let numAsString = n.toString();
    let firstHalf = numAsString.slice(0, numAsString.length/2).split('');
    let secondHalf = numAsString.slice(numAsString.length/2).split('');
        
    // sum the digits in the halves with reduce and compare
    return firstHalf.reduce((sum, digit) => { return parseInt(sum) + parseInt(digit)} ) === secondHalf.reduce((sum, digit) => { return parseInt(sum) + parseInt(digit)} );
}
