// There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.

// Example

// For legs = 6, the output should be
// houseOfCats(legs) = [1, 3].

// There could be either 1 cat and 1 person (4 + 2 = 6) or 3 people (2 * 3 = 6).

// For legs = 2, the output should be
// houseOfCats(legs) = [1].

// There can be only 1 person.

function houseOfCats(legs) {  
    let numPossiblePeople = [];
    
    for(let i = (legs % 4 === 2) ? 1 : 0; i <= legs / 2; i += 2){
        numPossiblePeople.push(i);
    }
    
    return numPossiblePeople;
    
    //legs % 4 === 2 -> 1, 3, 5...
    //legs % 4 === 0 -> 0, 2, 4...
}
