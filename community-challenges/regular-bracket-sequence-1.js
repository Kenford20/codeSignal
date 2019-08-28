// For a string consisting of only '('s and ')'s, determine if it is a regular bracket sequence or not.

// Example

// For sequence = "()()", the output should be
// regularBracketSequence1(sequence) = true.

// We could insert (1 + 2) * (2 + 4) which is a valid arithmetic expression, so the answer is true.

function regularBracketSequence1(sequence) {
    const stack = [];
    
    for(let i = 0; i < sequence.length; i++) {
        if(sequence[i] === ')') {
            if(stack.length > 0) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(sequence[i]);
        }
    }
    return stack.length > 0 ? false : true;
}
