// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString="123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

function longestDigitsPrefix(inputString) {
    let digits = '0123456789';
    let prefix = '';
    inputString = inputString.split('');
    
    for(let i = 0; i < inputString.length; i++){
        if(!digits.includes(inputString[0]))
            return '';
        if(digits.includes(inputString[i]))
            prefix += inputString[i];
        else
            return prefix;
    }
    return prefix;
}

// regex solution
function longestDigitsPrefix(inputString) {
    return inputString.match(/^[0-9]*/)[0]
}
