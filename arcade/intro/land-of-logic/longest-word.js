// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

// Example

// For text = "Ready, steady, go!", the output should be
// longestWord(text) = "steady".

function longestWord(text) {
    text = text.match(/[a-zA-Z]+/g)
    let longestLength = 0;
    let longestWord = '';
    
    for(let i = 0; i < text.length; i++){
        if(text[i].length > longestLength){
            longestLength = text[i].length;
            longestWord = text[i];
        }
    }
    return longestWord;
}