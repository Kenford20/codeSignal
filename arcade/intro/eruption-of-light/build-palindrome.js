// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// buildPalindrome(st) = "abcdcba".

function buildPalindrome(st) {
    st = st.split('');
    let indexCounter = 1;
    let tailIndex = st.length - 1;
    let isEvenLength = st.length % 2 === 0;
    
    for(let i = 0; i < st.length; i++){
        if(st[i] !== st[tailIndex]){
            if(isEvenLength && (i + 1 === tailIndex)){ // append two middle chars that are mismatched in an even lengthed string
                st.splice(tailIndex + indexCounter - 1, 0, st[i])
                st.splice(tailIndex + indexCounter - 2, 0, st[i+1])
            } else { // append mismatched char to its opposite tail index
                st.splice(tailIndex + 1, 0, st[i])
            }
        } 
        else {
            tailIndex--;
            indexCounter++;
        }
        if(tailIndex <= i) break;
    }
    return st.join('');
}