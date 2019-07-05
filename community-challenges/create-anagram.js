// You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

// Example

// For s = "AABAA" and t = "BBAAA", the output should be
// createAnagram(s, t) = 1;
// For s = "OVGHK" and t = "RPGUC", the output should be
// createAnagram(s, t) = 4.

function createAnagram(s, t) {
    let numDiffChars = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(t.indexOf(s[i]) >= 0) {
            t = t.replace(new RegExp(s[i]), '.');
        } else {
            numDiffChars++;
        }
    }
    return numDiffChars;
}
