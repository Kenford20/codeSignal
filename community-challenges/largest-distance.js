// You are given a set of points on the Cartesian plane. Consider the distance between two points as the maximum difference of their coordinates. For example, the distance between points (1, 2) and (4, 6) is equal to max(|4 - 1|, |6 - 2|) = 4.

// Given a set of points, find the pair with the largest distance and return the value of their distance.

// Example

// For a = [7, 6, 6, 8, 1, 2, 8, 6], the output should be
// largestDistance(a) = 7.

function largestDistance(a) {
    let xValues = [];
    let yValues = [];
    
    for(let i = 0; i < a.length; i += 2) {
        xValues.push(a[i]);
        yValues.push(a[i+1]);
    }
    return Math.max(Math.max(...xValues) - Math.min(...xValues), Math.max(...yValues) - Math.min(...yValues));
}
