// You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold. Of course you don't want to wait too long, so you know that the answer is not greater than 6.

// Example

// For deposit = 100, rate = 20, and threshold = 170, the output should be
// depositProfit(deposit, rate, threshold) = 3.

// Each year the amount of money in your account increases by 20%. So throughout the years, your balance would be:

// year 0: 100;
// year 1: 120;
// year 2: 144;
// year 3: 172.8.
// Thus, it will take 3 years for your balance to pass the threshold, so the answer is 3.

function depositProfit(deposit, rate, threshold) {
    let numYears = 0;
    
    while(deposit < threshold){
        deposit = deposit + deposit*(rate/100);
        numYears++;
    }
    return numYears > 6 ? 6 : numYears;
    // actually didnt need this ternary here because the challenge lies about the answer not being greater than 6 :c
}