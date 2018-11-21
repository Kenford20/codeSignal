// You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

function createAnagram(s, t) {
    s = s.split('');
    t = t.split('');
    let index = 0;
    let length = s.length;
    
    for(let i = 0; i < length; i++){
        if(t.indexOf(s[index]) >= 0){
            t.splice(t.indexOf(s[index]), 1);
            s.splice(s[index], 1);
        }
        else index++;
    }
    return s.length;
}

