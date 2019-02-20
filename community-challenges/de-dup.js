// Given an array of integers, remove all of the duplicates

function deDup(a) {
    return a.filter((num, i) => i === a.indexOf(num));
}
