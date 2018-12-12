// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

function reverseParentheses(s) {
    let charsBeforeParentheses = s.slice(0, s.indexOf( '(' ));
    let charsInParentheses = s.slice(s.indexOf( '(' ) + 1, s.indexOf( ')' )).split('').reverse().join('');     
    let charsAfterParentheses = s.slice(s.indexOf( ')' )+1);

    console.log(charsAfterParentheses)
    return charsBeforeParentheses + charsInParentheses + charsAfterParentheses; 
}