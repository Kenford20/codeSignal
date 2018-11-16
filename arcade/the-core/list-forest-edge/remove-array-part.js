// Remove a part of a given array between given 0-based indexes l and r (inclusive).

function removeArrayPart(inputArray, l, r) {
    inputArray.splice(l, r-l+1);
    return inputArray;
}