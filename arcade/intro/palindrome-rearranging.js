// Given a string, find out if its characters can be rearranged to form a palindrome.

function palindromeRearranging(inputString) {
    let matchingChars = [];
    inputString = inputString.split('');
    let iterations = inputString.length/2;
    let j = 0;
    
    // iterate through half of the input string
    for(let i = 0; i < iterations; i++){
        // push first element to matchingChars array and remove from inputString
        matchingChars.push(inputString[j]);
        console.log('pushed: ' + inputString[j]);
        inputString.splice(j,1);
        
        // remove matching pair of that pushed element if it exists
        if(inputString.indexOf(matchingChars[i]) >= 0){
            console.log('matched'); 
            inputString.splice(inputString.indexOf(matchingChars[i]), 1); 
            j--;
        }
        // if no matching pair is found, push it back into inputString
        else{
            console.log('no match');
            inputString.unshift(matchingChars[i]);
        }
        j++;
    }
    // inputString will contain all the elements that did not have a matching pair when the loop exits
    console.log(matchingChars);
    console.log(inputString);
    
    // inputString is a rearrangable palindrome if all the elements in the string had a matching pair (one for the first half and another for the second half)
    // inputString is not a rearrangable palindrome if there are more than 1 element that did not have a matching pair (can only have one unmatched element, which is the one directly in the middle for odd length strings)
    return !(inputString.length > 1);
}