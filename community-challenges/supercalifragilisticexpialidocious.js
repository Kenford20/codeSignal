// This is a reverse challenge, enjoy!
// A reverse challenge is a special type of challenge, where no description is provided! You have to solve two challenges in one: find out what the author wants from you and write a solution. Check out this page for more information.

// Input:
// s: "a"
// Expected Output:
// [6, 11, 24]

// Input:
// s: "c"
// Expected Output:
// [5, 19, 29]

// Input:
// s: "e"
// Expected Output:
// [3, 20]

// Input:
// s: "d"
// Expected Output:
// [27]

function supercalifragilisticexpialidocious(s) {
    let letterPositionsInStr = [];
    let str = 'supercalifragilisticexpialidocious'.split('');
    
    while(str.includes(s)) {
        letterPositionsInStr.push(str.indexOf(s));
        str.splice(str.indexOf(s), 1, '-');
    }
    return letterPositionsInStr;
}
