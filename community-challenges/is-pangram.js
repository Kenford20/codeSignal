// Given a sentence, check whether it is a pangram or not.
// A pangram is a sentence that uses every letter of the alphabet at least once.

// Example
// For sentence = "The quick brown fox jumps over the lazy dog.", the output should be
// isPangram(sentence) = true;
// For sentence = "abcdefghijklmnopqrstuvwxya", the output should be
// isPangram(sentence) = false.

function isPangram(sentence) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for(let i = 0; i < alphabet.length; i++) {
        console.log(alphabet[i].toUpperCase())
        if(sentence.indexOf(alphabet[i]) < 0 && sentence.indexOf(alphabet[i].toUpperCase()) < 0)
             return false;
    }
    return true;
}
