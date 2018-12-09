// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be
// isBeautifulString(inputString) = true;
// For inputString = "aabbb", the output should be
// isBeautifulString(inputString) = false;
// For inputString = "bbc", the output should be
// isBeautifulString(inputString) = false.

function isBeautifulString(inputString) {
    inputString = inputString.split('');
    let currentLetterCount = 0;
    let occurencesOfLetters = [];
        
    // create array containing number of occurences for every alphabetical letter in string 
    for(let i = 97; i <= 122; i++){
        while(inputString.includes(String.fromCharCode(i))){
            currentLetterCount++;
            inputString.splice(inputString.indexOf(String.fromCharCode(i)), 1);
        }
        occurencesOfLetters.push(currentLetterCount);
        currentLetterCount = 0; 
    }
    
    // string is beautiful if this array is in descending order (every following letter occurs no more than its previous letter)
    for(let j = 0; j < occurencesOfLetters.length; j++){
        if(occurencesOfLetters[j] < occurencesOfLetters[j+1])
            return false;
    }
    return true;
}
