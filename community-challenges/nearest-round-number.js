// Find the smallest round number that is not less than a given value.
// An integer is called a round number if it ends with one or more zeroes.
// Example

// For value = 122, the output should be
// nearestRoundNumber(value) = 130.

function nearestRoundNumber(value) {
    return Math.round(Math.ceil(value / 10)) * 10;
}
