// You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.
// Return the obtained integer M.

// Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.

function arrayPacking(a) {
    
    // takes in a decimal and returns 8 digit binary equivalent 
    function convertToBinary(num){
        let binaryNum = '';
        for(let i = 0; i < (8 - num.toString(2).length); i++){
            binaryNum += '0'; // add the leading zeros
        }
        return binaryNum + num.toString(2);
    }
    
    let packedBinaryNum = '';    
    // create combined string of binaries for each index of input array
    for(let j = a.length - 1; j >= 0; j--){
        packedBinaryNum += convertToBinary(a[j]);
    } 
    return parseInt(packedBinaryNum, 2); // return decimal equivalent
}