// Given two strings s1 and s2, merge them into one string by overlapping the suffix of the first string and the prefix of the second string. If there's nothing to concatenate, return the concatenation of the strings.

// Example

// For s1 = "cesario" and s2 = "oputera", the output should be
// singkatan(s1, s2) = "cesarioputera".
// The strings overlap by the character 'o', making the answer "cesarioputera".

// Input: s1: "pakoper", s2: "perxxpa"
// Expected Output: "pakoperxxpa"

function singkatan(s1, s2) {
    let tailIndex = s1.length - 1;
    let overlap = s1.slice(tailIndex)
    let containsOverlap = new RegExp(overlap);
        
    while(containsOverlap.test(s2) && tailIndex > -1) {
        tailIndex--;
        overlap = s1.slice(tailIndex);  
        containsOverlap = new RegExp(overlap);
    }
    overlap = s1.slice(tailIndex+1);
    
    return s2.indexOf(overlap) === 0 
        ? s1 + s2.slice(s1.length - tailIndex - 1) 
        : s1 + s2;
}
