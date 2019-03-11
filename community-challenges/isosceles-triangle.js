// Given length of a triangle sides, check if it is isosceles.

// Example

// For sides = [4, 3, 2], the output should be
// isoscelesTriangle(sides) = false;
// For sides = [5, 3, 5], the output should be
// isoscelesTriangle(sides) = true.

function isoscelesTriangle(sides) {
    return !(sides.length === sides.filter((side, i) => i === sides.indexOf(side)).length);
}
