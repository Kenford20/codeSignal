// Consider two following representations of a non-negative integer:

// A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
// An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between # characters, and preceded by the base, which can only be a number between 2 and 16 in the first representation. For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.
// Additionally, both representations may contain underscore (_) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.

// Your task is to determine whether the given string is a valid integer representation.

// Note: this is how integer numbers are represented in the programming language Ada.

function adaNumber(line) {    
    if(line.indexOf('#') >= 0){
        let base = line.slice(0, line.indexOf('#'));
        let integer = line.slice(line.indexOf('#') + 1);
        let possibleBaseValues = ['_']; // line of digits can include underscore
        let base16LowercaseValue = 97;
        let base16UppercaseValue = 65;
        
        if(integer.indexOf('#') < 0 || integer.length === 1 || (base < 2 || base > 16))
            return false 
     
        // create array containing the possible base values for the integer between '#'s
        for(let i = 0; i < parseInt(base); i++){
            if(i < 10){
                possibleBaseValues.push(i);
            } else {
                possibleBaseValues.push(String.fromCharCode(base16LowercaseValue));
                possibleBaseValues.push(String.fromCharCode(base16UppercaseValue));
                base16LowercaseValue++;
                base16UppercaseValue++;
            }
        }
        
        // check if digits are within range of base value (base 7 has digits 0-6, etc)
        for(let i = 0; i < integer.length - 1; i++){
            let digit = (integer[i] < 10) ? parseInt(integer[i]) : integer[i];
            if(possibleBaseValues.indexOf(digit) < 0)
                return false;
        } 
        return true;
    }
    // simple decimal representation at this point
    return line.split('').every(digit => /_|[0-9]/.test(digit));
}
