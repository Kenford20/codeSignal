// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
    let largestProduct = 0;
    for(let i = 0; i < inputArray.length-1; i++){
        if(inputArray[i]*inputArray[i+1] > largestProduct)
            largestProduct = inputArray[i]*inputArray[i+1];
        else if(i === 0) // first product is negative
            largestProduct = inputArray[i]*inputArray[i+1];
    }
    return largestProduct;
}