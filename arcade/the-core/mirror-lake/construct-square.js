// Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

// If there is no solution, return -1.

// For s = "ab", the output should be
// constructSquare(s) = 81.
// The largest 2-digit square number with different digits is 81.
// For s = "zzz", the output should be
// constructSquare(s) = -1.
// There are no 3-digit square numbers with identical digits.
// For s = "aba", the output should be
// constructSquare(s) = 900.
// It can be obtained after reordering the initial string into "baa" and replacing "a" with 0 and "b" with 9.

function electionsWinners(votes, k) {
    votes = votes.map(vote => vote + k); // add votes to all candidates
    
    // all candidates have the same number of votes
    if(votes.every(vote => vote === votes[0])){
        if(k === 0)
            return 0; // tie
        else
            return votes.length; // all candidates can win
    }
    
    // if 0 voters, check if there is only 1 occurence of max (this candidate is the winner), if there are more than 1 occurence of the max, then theres going to be a tie
    if(k === 0)
        return votes.filter(vote => vote === Math.max(...votes)).length > 1 ? 0 : 1;

    // for k > 0, return number of candidates that have a greater number of votes than the losing candidate
    return votes.filter(vote => vote > Math.min(...votes)).length;
}
