// This is a reverse challenge, enjoy! A reverse challenge is a special type of challenge, where no description is provided! You have to solve two challenges in one: find out what the author wants from you and write a solution

// Input:
// a: 13
// b: 8
// Expected Output: 2151041.625

// Input:
// a: 34
// b: 21
// Expected Output: 55137141.61904

function psyOps(a, b) {
    return (a+b).toString() + (a-b) + (a*b) + (a/b);
}
