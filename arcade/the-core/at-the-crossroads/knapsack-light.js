// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let heaverItem = Math.max(weight1, weight2);
    let valueOfLighterItem = (heaverItem === weight1) ? value2 : value1;

    // cant take anything
    if(maxW < weight1 && maxW < weight2)
        return 0;
    
    // can only take one item
    else if(maxW < (weight1 + weight2)){
        // can only take lighter item
        if(maxW < heaverItem)
            return valueOfLighterItem;
        // can take either item, so take the one thats more valuable
        return (value1 > value2) ? value1 : value2;
    }
    // can take both items
    else
        return value1 + value2;
}