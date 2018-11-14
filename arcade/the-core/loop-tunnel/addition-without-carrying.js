// A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

// Given two integers, find the result which the little boy will get.

// Note: the boy used this site as the source of knowledge, feel free to check it out too if you are not familiar with column addition.

function additionWithoutCarrying(param1, param2) {
    let smallerAddend = Math.min(param1, param2).toString();
    let largerAddend = Math.max(param1, param2).toString();
    let littleBoysSum = [];
    
    for(let i = smallerAddend.length - 1; i >= 0; i--){
        let index = (smallerAddend.length === largerAddend.length) ? i : i+1;
        littleBoysSum.unshift((parseInt(largerAddend[index]) + parseInt(smallerAddend[i]))%10);
        
        if(i === 0 && smallerAddend.length !== largerAddend.length)
            littleBoysSum.unshift(largerAddend.slice(0, largerAddend.length - smallerAddend.length));
    } 
    return parseInt(littleBoysSum.join(''));
}