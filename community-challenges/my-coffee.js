// You are ordering Coffee at a vending machine and thinking how you would implement the algorithm that chooses which coffee to give you based on a keypad selection.

// Example

// For number = 2, the output should be
// myCoffee(number) = "Colombian".

// Return "French Roast" if number is 1, "Colombian" if number is 2, "Kona" if number is 3.

function myCoffee(number) {
    switch(number) {
        case 1: return 'French Roast'; break;
        case 2: return 'Colombian'; break;
        case 3: return 'Kona'; break;
        default: return 'Some unlist coffee!';
    }
}
