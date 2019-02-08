// Certain banking sites display a 5-button login page for users to enter their 4-digit PIN (the secret Personal Identification Number used to access the site).

// The ten digits, 0 - 9, are randomly shuffled and a pair of digits is placed in each of the 5 buttons, without repetition.

// When entering each digit of his or her PIN, the user has to click on the particular button containing that digit.

// For example, if my PIN were "1618", I would click on (1 or 5), (6 or 9), (1 or 5), and (7 or 8) in this order.

// If a curious onlooker observed your button clicks, he or she would not be able to immediately guess your PIN--there are 16 possible choices.

// It's not a huge number, but you want to show that this system is extremely fragile when someone knows more than one successful login sequence.

// A bank startup wants to see empirical evidence and have enlisted your help to analyze some real-world data (the login details of several users).

// Each test case's input is an array of successful logins for a particular user. The PIN does not change within each test case.

// Each one of these successful logins is an array of 4 strings, each containing the pair of digits that was shown on the button clicked. The buttons were clicked in the order given in the array.

// You may assume the site produced a valid set of buttons. A successful login will not use all buttons.

// Your task is to return a string representing the user's PIN, deducing as many digits as possible. Wherever you are unsure, use a ? in its place.


// For

// logins: [["58", "24", "06", "24"], 
//          ["08", "24", "56", "24"]]
// the output should be pinPadDiscovery(logins) = "8?6?".

// 8 is repeated in the first position, and 6 is repeated in the third position. However, 24 was clicked in the second and last positions, and we're uncertain whether the PIN is 8262, 8264, 8462, or 8464. You should return "8?6?".

// For

// logins: [["23", "17", "58", "17"], 
//          ["39", "14", "05", "14"], 
//          ["37", "01", "59", "01"], 
//          ["37", "18", "56", "18"]]
// the output should be pinPadDiscovery(logins) = "3151".

// The repeated digits are more evident, and we can conclude that the PIN is 3151, so return "3151".

function pinPadDiscovery(logins) {
    let possiblePin = '';
    let firstLogin = logins[0];
    let buttonSequence = '';
    
    // iterate column by column
    for(let col = 0; col < logins[0].length; col++) {
        // create strings of the sequences of the button combinations for each login
        for(let row = 0; row < logins.length; row++) {
            buttonSequence += logins[row][col];
        }
        // filter the sequences for the number of occurrences of each possible digit from the first login
        let firstDigits = buttonSequence.split('').filter(digit => digit === firstLogin[col][0]);
        let secondDigits = buttonSequence.split('').filter(digit => digit === firstLogin[col][1]); 
        
        // a digit in the pin can be deduced if the same digit repeats across every login in the corresponding buttons with that digit
        // in other words, the number of occurrences should match the number of logins
        if(firstDigits.length === logins.length && secondDigits.length === logins.length)
            possiblePin += '?';
        else if(firstDigits.length === logins.length)
            possiblePin += firstDigits[0] + '';
        else if(secondDigits.length === logins.length)
            possiblePin += secondDigits[0] + '';
        else
            possiblePin += '?'
        
        buttonSequence = '';
    }
    return possiblePin;
}