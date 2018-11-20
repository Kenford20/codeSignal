// How many strings equal to a can be constructed using letters from the string b? Each letter can be used only once and in one string only.

// Example

// For a = "abc" and b = "abccba", the output should be
// stringsConstruction(a, b) = 2.

// We can construct 2 strings a with letters from b.

function stringsConstruction(a, b) {
    a = a.split('');
    b = b.split('');

    let index = 0;
    let count = 0;
    let numStrings = 0;
    
    while(b.length > 0){
        if(b.indexOf(a[index]) >= 0){
            count++;
            b.splice(b.indexOf(a[index]), 1);
        } else break;

        if(index === a.length - 1)
            index = -1;
        
        if(count === a.length){
            numStrings++;
            count = 0;
        }
        index++;
    }
    return numStrings;
}
