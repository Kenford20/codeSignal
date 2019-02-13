// You're almost finished your first semester at computer school - the only thing left is to write the exam for your data structures course!

// To get a better idea of what you need to study, you'd like to see where you struggled the most. So your goal is to write an algorithm that shows what your grade was at each point in time throughout the course.

// Your instructor's marking philosophy is that they only care about consistency, so they'll be judging your performance according to your mode mark in the course (based on all assignments and tests).

// Given scores, an array of integers representing all test and assignment scores, your task is to return an array of integers where output[i] represents the mode grade of all marks up to (and including) scores[i]. Your instructor is a generous marker, so if there's a tie for the mode, your grade is the highest among them.

// Example
// For scores = [75, 81, 75, 90] the output should be modeScores(scores) = [75, 81, 75, 75].

// After each score is entered, the mode is recalculated as follows:

// For [75], the mode is 75 since it's the only element.
// For [75, 81], the mode is 81 since it's greater than 75.
// For [75, 81, 75], the mode is 75 (most frequent element).
// For [75, 81, 75, 90], the mode is 75 (still the most frequent element).

function modeScores(scores) {
    let currentScores = [];
    let uniqueScores = [scores[0]];
    let numOccurrences = [];
    let output = [];
    
    for(let i = 0; i < scores.length; i++) {
        currentScores.push(scores[i]);
        if(!uniqueScores.includes(scores[i])) {
            uniqueScores.push(scores[i]);
            uniqueScores.sort((a,b) => a - b);
        }
        
        // create array of the score frequencies of the current scores
        // definitely not a good approach here considering the currentScores array filtered every single iteration
        for(let j = 0; j < uniqueScores.length; j++) {
            numOccurrences.push(currentScores.filter(num => num === uniqueScores[j]).length);
        }
        output.push(uniqueScores[numOccurrences.lastIndexOf(Math.max(...numOccurrences))]);
        numOccurrences = [];
    }
    return output;
}

// solution above worked but did not pass execution time limit, refactored below
function modeScores(scores) {
    let output = [];
    // create sorted array of unique scores
    let uniqueScores = scores.filter((num, i) => scores.indexOf(num) === i).sort((a,b) => a-b);
    // create an equally sized array of uniqueScores to keep track of the score frequencies
    let numOccurrences = uniqueScores.map(score => {return 0});

    // since arrays are equally sized, the occurrences of each unique number can be incremented through its index
    scores.map(score => {
        numOccurrences[uniqueScores.indexOf(score)]++;
        // using lastIndexOf picks the larger number if there is currently a tie between modes
        output.push(uniqueScores[numOccurrences.lastIndexOf(Math.max(...numOccurrences))]);
    });
    return output;
}
