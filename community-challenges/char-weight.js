// Given a string s, your task is to calculate the weight of each character in it, where weight is the number of times a character appears in the string (case insensitive).

// The answer should be returned as a string in the format char1{weight1}char2{weight2}..., with the characters sorted as follows:

// The characters with larger weights should come first;
// In the case of a tie, the characters should be sorted by their char code values in ascending order.
// Example

// For s = "codefights", the output should be
// charWeight = "c{1}d{1}e{1}f{1}g{1}h{1}i{1}o{1}s{1}t{1}"

// Each character appears in s exactly once, so the characters are sorted by their char codes.

// For s = "Google", the output should be
// charWeight = "g{2}o{2}e{1}l{1}"

// The letters 'g' and 'o' both appear twice, so they come first, followed by the other letters.

function charWeight(s) {
    let charWeightStrings = [];
    let splitWeights = {};

    while(s.length > 0) {
        // create array of every char and their corresponding weight
        let currentChar = s[0].toLowerCase();
        let regex = new RegExp(currentChar, 'gi');
        let numOccurrences = s.match(regex).length;
        s = s.replace(regex, '');
        let charWeightStr = currentChar + `{${numOccurrences}}`;
        charWeightStrings.push(charWeightStr);

        // create object of unique weights as properties which have arrays as values that contain the charWeightStrings that corresponds to that unique weight
        // i.e the property of '1' will have all the chars with weight 1, '2' will have chars with weight 2, ..etc
        if(!splitWeights.hasOwnProperty(numOccurrences))
            splitWeights[numOccurrences] = [charWeightStr];
        else
            splitWeights[numOccurrences] = [...splitWeights[numOccurrences], charWeightStr]
        
    }
    // used the logic above to be able to sort each group of strings based on their weights separately, as done below
    let sortedCharWeightStrings = [];
    
    for(let weight in splitWeights) {
        splitWeights[weight] = splitWeights[weight].sort((a,b) => a.charCodeAt() - b.charCodeAt());
        sortedCharWeightStrings.unshift(...splitWeights[weight]); // using unshift because the object properties are in ascending order
    }
    return sortedCharWeightStrings.join('');
}
