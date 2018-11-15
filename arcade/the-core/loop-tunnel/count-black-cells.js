// Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

// A cell is painted black if it has at least one point in common with the diagonal;
// Otherwise, a cell is painted white.
// Count the number of cells painted black.

function countBlackCells(n, m) {
    if(n < 3 || m < 3)
        return m + n - 1;

    return (n === m) ? n + m + (n-2) : n + m + (Math.abs(n - m) - 2);
}


// 9 - 7
// 16 - 10
// 25 - 13 
// 3 squares for every row and col
// 
// n = 33, m = 44 -> 86
// n = 16, m = 8 -> 30
// n = 66666, m = 88888 -> 177774
// n + m (big-small - 2)