// Determine whether the given string can be obtained by one concatenation of some string to itself.

// Example

// For inputString = "tandemtandem", the output should be
// isTandemRepeat(inputString) = true;
// For inputString = "qqq", the output should be
// isTandemRepeat(inputString) = false;
// For inputString = "2w2ww", the output should be
// isTandemRepeat(inputString) = false.

function isTandemRepeat(inputString) {
    return (
        inputString.slice(0, Math.ceil(inputString.length / 2)) === 
        inputString.slice(Math.floor(inputString.length+1) / 2)
    )
}
