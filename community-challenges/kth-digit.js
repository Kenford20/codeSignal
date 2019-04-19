// Given an integer, find its kth digit.

// Example

// For n = 578943 and k = 2, the output should be
// kthDigit(n, k) = 7.

function kthDigit(n, k) {
    n = n.toString();
    return k > n.length ? -1 : parseInt(n[k-1]);
}
