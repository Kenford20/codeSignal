// A string is said to be a correct sentence if it starts with the capital letter and ends with a full stop (.).

// Given a string, check whether it represents a correct sentence.

function isCorrectSentence(inputString) {
    return /^[A-Z].+\.$/.test(inputString);
}
