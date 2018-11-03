// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
    let numCommonChars = 0;
    s2 = s2.split('');
    
    for(let i = 0; i < s1.length; i++){
        if(s2.indexOf(s1[i]) >= 0){
            numCommonChars++;
            s2.splice(s2.indexOf(s1[i]), 1) // remove common char to handle repeats
        }
    }
    // return s1.split('').filter(char => {return s2.indexOf(char) >= 0;}).length
    return numCommonChars;
}