// Let's call a string cool if it is formed only by English letters and no two lowercase and no two uppercase letters are in adjacent positions. Given a string, check if it is cool.

// Example

// For inputString = "aQwFdA", the output should be
// coolString(inputString) = true;
// For inputString = "aAA", the output should be
// coolString(inputString) = false;
// For inputString = "q q", the output should be
// coolString(inputString) = false.

function coolString(inputString) {
    if(/[^a-zA-Z]/.test(inputString)) {
        return false;
    }
    
    const isLowercase = char => char.charCodeAt() >= 97 && char.charCodeAt() <= 122;
    const isUppercase = char => char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
    const alternateCaseCheck = isLowercase(inputString[0]) ? [isUppercase, isLowercase] : [isLowercase, isUppercase];
        
    for(let i = 1; i < inputString.length; i++) {
        if(alternateCaseCheck[i%2](inputString[i])) {
            return false;
        }
    }
    return true;
}