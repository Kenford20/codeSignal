// You're practicing writing numbers in word form, according to the following rules:

// The first letter is capitalized
// Hyphenated words are used for numbers under 100 (eg: "Thirty-two")
// Given an integer number, return a string representing the number in word form.

// Examples
// For number = 1, the output should be numberInWords(number) = "One".
// For number = 12, the output should be numberInWords(number) = "Twelve".
// For number = 14, the output should be numberInWords(number) = "Fourteen".
// For number = 21, the output should be numberInWords(number) = "Twenty-one".
// For number = 299, the output should be numberInWords(number) = "Two hundred ninety-nine".
// For number = 123456, the output should be numberInWords(number) = "One hundred twenty-three thousand four hundred fifty-six".

function numberInWords(number) {
    const hundredsPlus = {
        1000000: 'million',
        100000: 'hundred thousand',
        1000: 'thousand',
        100: 'hundred'
    }
    const descendingHundredsPlus = Object.keys(hundredsPlus).sort((a,b) => b > a);
    
    const tens = {
        90: 'ninety',
        80: 'eighty',
        70: 'seventy',
        60: 'sixty',
        50: 'fifty',
        40: 'forty',
        30: 'thirty',
        20: 'twenty'
    }
    const descendingTens = Object.keys(tens).sort((a,b) => b > a);
    
    const teens = {
        19: 'nineteen',
        18: 'eighteen',
        17: 'seventeen',
        16: 'sixteen',
        15: 'fifteen',
        14: 'fourteen',
        13: 'thireen',
        12: 'twelve',
        11: 'eleven',
        10: 'ten'
    }
    const ones = {
        9: 'nine',
        8: 'eight',
        7: 'seven',
        6: 'six',
        5: 'five',
        4: 'four',
        3: 'three',
        2: 'two',
        1: 'one',
    }
        
    const handleBelowHundred = (num) => {
        if(num >= 10 && num <= 19) {
            return teens[num];
        }
        
        if(num < 10) {
            return ones[num];
        }
        
        // 20 - 99
        for(let value of descendingTens) {
            if(num / value >= 1) {
                if(num % value === 0) {
                    return tens[value];
                } else {
                    return `${tens[value]}-${ones[num - value]}`;
                }
            }
        };
    }
    
    let numberAsWord = '';
    
    while(number > 0) {
        if(number >= 100) {
            for(let value of descendingHundredsPlus) {
                if(number / value >= 1) {
                    const digit = Math.floor(number/value);
                    // ten thousands
                    if(value == 1000 && number >= 10000) {
                        numberAsWord = numberAsWord.replace(/ thousand/, ''); // replace the 'thousand' in 'hundred thousand' if there is a 10000 place
                        numberAsWord += handleBelowHundred(digit);
                        numberAsWord += ' thousand ';
                    } else {
                        numberAsWord += ones[digit] + ' ';
                        numberAsWord += hundredsPlus[value] + ' ';
                    }
                    number -= digit * value;
                    break;
                } 
            };
        }
        // < 100
        else {
            numberAsWord += handleBelowHundred(number);
            return numberAsWord[0].toUpperCase() + numberAsWord.slice(1).replace(/\s$/, '');
        }
    }
    // reaches this point when number doesnt have tens/ones (123,400 or 456,700), which means return statement above didn't run
    return numberAsWord[0].toUpperCase() + numberAsWord.slice(1).replace(/\s$/, '');
}
