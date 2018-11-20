// We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

// It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:

// what is the weakness of the weakest numbers in the range [1, n]?
// how many numbers in the range [1, n] have this weakness?
// Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.

function isUnstablePair(filename1, filename2) {
    if(filename1 < filename2 && filename1.toUpperCase() >= filename2.toUpperCase()) 
        return true;
    else if(filename1 > filename2 && filename1.toUpperCase() <= filename2.toUpperCase())
        return true;
    else return false;
}
