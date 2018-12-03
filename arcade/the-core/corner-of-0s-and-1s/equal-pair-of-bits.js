// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

// Return the value of 2position_of_the_found_pair (0-based).

// Example

// For n = 10 and m = 11, the output should be
// equalPairOfBits(n, m) = 2.

// 1010 = 10102, 1110 = 10112, the position of the rightmost pair of equal bits is the bit at position 1 (0-based) from the right in the binary representations.
// So the answer is 21 = 2.

function equalPairOfBits(n, m) {
    return (() => {
        let biggerNum = Math.max(n, m);
        let smallerNum = Math.min(n, m);
        biggerNum = biggerNum.toString(2);
        smallerNum = smallerNum.toString(2);
        let indexOfMismatch = 0;
        let numLeadingZeroes = biggerNum.length - smallerNum.length;
        
        // add leading 0's to smaller num
        for(let j = 0; j < numLeadingZeroes; j++){
          smallerNum = '0' + smallerNum;
        }
        // find match    
        for(let i = biggerNum.length - 1; i >= 0; i--){
          if(biggerNum[i] === smallerNum[i])
            return Math.pow(2, indexOfMismatch);
          
          indexOfMismatch++;
        }  
      })(n,m);
  }
  