// In CodeSignal marathons, each task score is calculated independently. For a specific task, you get some amount of points if you solve it correctly, or you get a 0. Here is how the exact number of points is calculated:

// If you solve a task on your first attempt within the first minute, you get maxScore points.
// Each additional minute you spend on the task adds a penalty of (maxScore / 2) * (1 / marathonLength) to your final score.
// Each unsuccessful attempt adds a penalty of 10 to your final score.
// After all the penalties are deducted, if the score is less than maxScore / 2, you still get maxScore / 2 points.
// Implement an algorithm that calculates this score given some initial parameters.

// Example:
// marathonLength = 100,
// maxScore = 400,
// submissions = 4, and
// successfulSubmissionTime = 30, the output should be

// marathonTaskScore(marathonLength, maxScore, 
//                   submissions, successfulSubmissionTime) = 310
// Three unsuccessful attempts cost 10 * 3 = 30 points. 30 minutes adds 30 * (400 / 2) * (1 / 100) = 60 more points to the total penalty. So the final score is 400 - 30 - 60 = 310.

// Keeping the same input parameters as above but changing the number of attempts to 95 we get:
// marathonTaskScore(marathonLength, maxScore, submissions, successfulSubmissionTime) = 200;


function marathonTaskScore(marathonLength, maxScore, submissions, successfulSubmissionTime) {
    if(successfulSubmissionTime < 0)
        return 0;
    if(successfulSubmissionTime <= 1 && submissions === 1)
        return maxScore;
    
    let threshold = maxScore / 2;
    maxScore -= (successfulSubmissionTime * (maxScore / 2) * (1 / marathonLength)); 
    maxScore -= ((submissions - 1) * 10);
    if(successfulSubmissionTime <= 1 && submissions === 1)
        return maxScore;
    if(maxScore < threshold)
        return threshold;
    
    return maxScore;
}
