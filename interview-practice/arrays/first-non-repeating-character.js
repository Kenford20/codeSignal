

function firstNotRepeatingCharacter(s) {
    let alphabet = ' abcdefghijklmnopqrstuvwxyz';
    let charsCount = ['', 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let nonRepeatingChars = [];
    
    // count the number of occurences for each letter
    for(let i = 0; i < s.length; i++){
        charsCount[alphabet.indexOf(s[i])]++;
    }
    // store index of non repeating letters from s into the nonRepeatingChars array
    while(charsCount.indexOf(1) >= 0){ 
        nonRepeatingChars.push(s.indexOf(alphabet[charsCount.indexOf(1)]));
        // replace the 1 with a -2 (arbitrary place holder in order to continue using indexOf(1) without it returning the same value)
        charsCount.splice(charsCount.indexOf(1), 1, -2); 
    }
    // check for -2 (means a non repeating char did exist and has been replaced)
    // otherwise the smallest number in nonRepeatingChars is the index of the first non repeating char
    return charsCount.indexOf(-2) < 0 ? '_' : s[Math.min(...nonRepeatingChars)];
}
