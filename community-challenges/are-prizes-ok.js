// A programming competition is going to be held in your town and the organizers have given you the prizes they are planning to give to the first, second, and third places. Of course the prize for the first place must not be smaller than that for the second place, and the prize for the second place must not be smaller than that for the third place. Your task is to make sure the prizes do not violate the principles mentioned above.

// Example

// For first = 10, second = 5, and third = 5, the output should be
// arePrizesOK(first, second, third) = true.

function arePrizesOK(first, second, third) {
    return first >= second && second >= third;
}
