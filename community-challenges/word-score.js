// This is a reverse challenge. Good luck!
// It's a challenge without description , only with some visible tests !

// Input: word: "skills"
// Expected Output: 82

// Input: word: "knowledge"+
// Expected Output: 96

// Input: word: "hardwork"
// Expected Output: 98

// Input: word: "z"
// Expected Output: 26

function WordScore(word) {
    let alphabet = '.abcdefghijklmnopqrstuvwxyz';
    
    return word.split('').map(letter => alphabet.indexOf(letter)).reduce((a, b) => a + b);
}
git