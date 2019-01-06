// You're getting together with your family for a nice holiday meal! Every member of the family has brought a dish to share, and you've already inspected them in terms of quality and quantity.
// The array dishes contains 2-element arrays of the form [quality, quantity], where quality represents how much you enjoy the dish, and quantity represents how much of the dish is available.
// Given capacity representing the maximum total amount you can take, your task is to return the maximum possible enjoyment you'll get from the food.

// Note:
// You never get sick of any of the dishes, so your enjoyment doesn't diminish as you eat more of any given dish.
// When it comes to holiday meals, you tend to be greedy, so you won't be worrying about leaving some of the dishes for the other guests.

// Example
// For dishes = [[0, 8], [4, 4], [10, 8], [8, 3], [5, 13]] and capacity = 10, the output should be holidayPotluck(dishes, capacity) = 96
// Dish 2 is your favourite, with a quality of 10, so you'll take the whole 8 servings available.
// At this point you still have a capacity of 2 remaining, so you can take 2 of dish 3, which has a quality of 8.
// So the total enjoyment is 8 * 10 + 2 * 8 = 96.

function holidayPotluck(dishes, capacity) {
    // sort qualities of dishes in descending order 
    let sortedQualities = dishes.map(dish => dish[0]).sort((a, b) => b - a);
    let enjoyment = 0;
    let index = 0;
    
    for(let i = 0; i < sortedQualities.length; i++){
        while(sortedQualities[i] !== dishes[index][0]){
            index++;
        }
        // capacity < quantity so take servings that remaining capacity allows and exit
        if(dishes[index][1] >= capacity){
            enjoyment += capacity * dishes[index][0];
            return enjoyment;
        } 
        // capacity > quantity so take all of the servings 
        enjoyment += dishes[index][0] * dishes[index][1]; 
        capacity -= dishes[index][1]; // update capacity
        // remove dish from dishes array to handle duplicate qualities and repeated indexing
        dishes.splice(index, 1);
        index = 0;
    }
    // capacity is greater than the combined quantities of all dishes
    return enjoyment;
}
