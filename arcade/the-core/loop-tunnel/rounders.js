// We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

function rounders(n) {
    n = n.toString().split('');
    
    for(let i = n.length - 1; i > 0; i--){
        if(n[i] >= 5)
            n[i-1] = parseInt(n[i-1]) + 1;
        if(i !== '0')
            n[i] = '0';
    }
    return parseInt(n.join(''));
}