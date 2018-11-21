// A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

// A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

// Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

function isSubstitutionCipher(string1, string2) {
    let numDiffCharsInStr1 = 0;
    let numDiffCharsInStr2 = 0;
    
    for(let i = 0; i < string1.length - 1; i++){
        if(string1[i] !== string1[i+1])
            numDiffCharsInStr1++;
        if(string2[i] !== string2[i+1])
            numDiffCharsInStr2++;
    }
    return numDiffCharsInStr1 === numDiffCharsInStr2;
}