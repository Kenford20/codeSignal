// You found two items, for each of them you know their weight. You have a max weight capacity of maxW. If your weight capacity allows you to take with you both items, return "both". If you can take whichever one you want, return "either". If you cannot take any items, return "none". Otherwise, return "first" or "second" based on the index of the item which you can take.

// Example

// For weight1 = 5, weight2 = 4, and maxW = 8, the output should be
// knapsackLight2(weight1, weight2, maxW) = "either";
// For weight1 = 10, weight2 = 4, and maxW = 9, the output should be
// knapsackLight2(weight1, weight2, maxW) = "second".

function knapsackLight2(weight1, weight2, maxW) {
    return weight1 > maxW && weight2 > maxW ? 'none'
        : weight1 + weight2 <= maxW ? 'both'
        : weight1 <= maxW && weight2 <= maxW && weight1 + weight2 > maxW ? 'either'
        : weight1 <= maxW && weight2 > maxW ? 'first'
        : 'second';
}
