// Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

// It is guaranteed that there is at least one tooth at each end of the comb.
// It is also guaranteed that the total length of two strings is smaller than 32.
// Note, that the combs can not be rotated/reversed.

// Example

// For comb1 = "*..*" and comb2 = "*.*", the output should be
// combs(comb1, comb2) = 5.

function combs(comb1, comb2) {
    let largerComb = comb1.length >= comb2.length ? comb1 : comb2;
    let smallerComb = comb1.length < comb2.length ? comb1 : comb2;
        
    let smallerCombUpsideDown = smallerComb.split('').map(tooth => {
        return tooth === '*' ? '.' : '*';
    })
    
    let regex = smallerCombUpsideDown.map(tooth => '\\' + tooth).join('');
    
    console.log(smallerCombUpsideDown)
    console.log(regex)
    
    let combTeethFit = new RegExp(regex);
    let a = '.' + largerComb + '.';
    console.log(a)
    console.log(combTeethFit.test(a))
    
    if(smallerComb.length <= largerComb.length - 2)
        return largerComb.length;
    else
        return largerComb.length + smallerComb.length - 2;
    
    // **.**.*** / *..*
    // .*.
}
