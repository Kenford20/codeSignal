// Change the capitalization of all letters in a given string.

// Example

// For text = "Hello", the output should be
// swapCase(text) = "hELLO".

function swapCase(text) {
    return text.toString().split('').map(letter => {
        return (letter.charCodeAt() >= 65 && letter.charCodeAt() < 97) 
            ? letter.toLowerCase() 
            : letter.toUpperCase()
    }).join('');
}

function swapCase(text) {
    let swappedCaseStr = '';

    for(let i = 0; i < text.length; i++) {
        let asciiCode = text[i].charCodeAt();
        if(asciiCode >= 65 && asciiCode <= 90) {
            swappedCaseStr += text[i].toLowerCase();
        } else {
            swappedCaseStr += text[i].toUpperCase();
        }
    }
    return swappedCaseStr;
}
