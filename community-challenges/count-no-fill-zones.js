// It's another exciting reverse challenge! A reverse challenge is a special type of challenge, where no description is provided! You have to solve two challenges in one: find out what the author wants from you and write a solution

// Input:
// words: "cool"
// Expected Output: 2

// Input:
// words: "Nice"
// Expected Output: 1

// Input:
// words: "fully fill this"
// Expected Output: 0

// Input:
// words: "you might be wondering how to count no fill zones"
// Expected Output: 14

function countNoFillZones(words) {
    let charsWithFill = {
        a: 1,
        A: 1,
        b: 1,
        B: 2,
        d: 1,
        D: 1,
        e: 1,
        g: 1,
        o: 1,
        O: 1,
        p: 1,
        P: 1,
        q: 1,
        Q: 1,
        R: 1,
        '0': 1,
        '4': 1,
        '6': 1,
        '8': 2,
        '9': 1
    };
    let count = 0;
    
    for(let i = 0; i < words.length; i++){
        if(charsWithFill[words[i]])
            count += charsWithFill[words[i]];
    }
    return count;
}
