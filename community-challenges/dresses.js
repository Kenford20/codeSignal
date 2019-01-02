// Diana is planning to go to a party this weekend! She wants to show up looking fresh, so she decided to buy a new dress. She is very conscious of the color of her future dress and she really wants something more green than red or blue.

// There are several dresses in the shop, and we know the RGB representations of their colors. Your task is help Diana by finding the indices of the dresses in which there is more green than either red or blue (ie: where green uniquely has the highest value).

// The RGB representation of a color is a 6-digit hexadecimal number. The first two digits are the red component, digits 3 and 4 are the green component, and the last two digits are the blue component.
// There is more green in a color then red or blue if and only if the green component is strictly greater than the red component and is also strictly greater than the blue component. For example A0FC77 is a good color for Diana, but 90CACA is not, because both green and blue components are CA, so there isn't more green than blue.

// Examples
// For colors = ["A0FC77", "90CACA"], the output should be dresses(colors) = [0]

// The dress at index 0 has more green than either red or blue, but the dress at index 1 has an equal amount of green and blue, so it doesn't qualify.

// For colors = ["000000", "101110", "F01AC3", "0FFEF4"], the output should be dresses(colors) = [1, 3]

function dresses(colors) {
    let greenDresses = [];
    
    for(let i = 0; i < colors.length; i++){
        let red = parseInt(colors[i][0] + colors[i][1], 16);
        let green = parseInt(colors[i][2] + colors[i][3], 16);
        let blue = parseInt(colors[i][4] + colors[i][5], 16);
        
        if(green > red && green > blue)
            greenDresses.push(i);
    }
    return greenDresses;
}
