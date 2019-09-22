// For a given triangle determine if it is a right triangle.
// A triangle is called right if it has a right (i.e. 90 degrees) angle.

// Example

// For sides = [3, 5, 4], the output should be
// rightTriangle(sides) = true.

function rightTriangle(sides) {
    let hypotenuse = Math.max(...sides);
    let legs = sides.filter(side => side !== hypotenuse);
    
    return Math.pow(legs[0], 2) + Math.pow(legs[1], 2) === Math.pow(hypotenuse, 2);
}
