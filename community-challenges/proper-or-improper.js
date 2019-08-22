// Determine whether a given fraction is proper.
// A fraction written as a/b is said to be a proper fraction if the absolute value of the fraction is strictly less than one. Otherwise it is called an improper fraction.

// Example

// For a = [7, 2], the output should be
// properOrImproper(a) = "Improper".

function properOrImproper(a) {
    return Math.abs(a[0]) >= Math.abs(a[1]) ? 'Improper' : 'Proper';
}
