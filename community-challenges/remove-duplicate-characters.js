// Remove all characters from a given string that appear more than once in it.

// Example
// For str = "zaabcbd", the output should be
// removeDuplicateCharacters(str) = "zcd".

function removeDuplicateCharacters(str) {
    let unreplicatedChars = '';
    
    for(let i = 0; i < str.length; i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            unreplicatedChars += str[i];
        }
    }
    return unreplicatedChars;
}
