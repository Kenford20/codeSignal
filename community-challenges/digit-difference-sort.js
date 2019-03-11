// Given an array of integers, sort its elements by the difference of their largest and smallest digits. In the case of a tie, that with the larger index in the array should come first.

// Example

// For a = [152, 23, 7, 887, 243], the output should be
// digitDifferenceSort(a) = [7, 887, 23, 243, 152].

// Here are the differences of all the numbers:

// 152: difference = 5 - 1 = 4;
// 23: difference = 3 - 2 = 1;
// 7: difference = 7 - 7 = 0;
// 887: difference = 8 - 7 = 1;
// 243: difference = 4 - 2 = 2.
// 23 and 887 have the same difference, but 887 goes after 23 in a, so in the sorted array it comes first

function digitDifferenceSort(a) {
    let sortedDifferences = [];
    let differences = [];
    
    // calculate the difference of the smallest and largest digit of each integer and store into array
    for(let i = 0; i < a.length; i++) {
        let integers = a[i].toString().split('');
        let largestDigit = Math.max(...integers);
        let smallestDigit = Math.min(...integers);
        
        differences.push(largestDigit - smallestDigit);
    }
    // use the differences array to create a sorted differences array based on the smallest differences
    for(let j = 0; j < differences.length; j++) {
        // using lastIndexOf handles the ties as it will push the value with the larger index in that array
        let smallestDiffIndex = differences.lastIndexOf(Math.min(...differences));
        sortedDifferences.push(a[smallestDiffIndex]);
        // replace the smallest difference used with max js integer(so it doesnt conflict with larger test cases) to be able to use the next smallest difference
        differences.splice(smallestDiffIndex, 1, Number.MAX_VALUE);
    }
    return sortedDifferences;
}
