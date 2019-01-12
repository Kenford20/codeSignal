// One Very Important User (VIU) has a Very Confidential Document (VCD) stored on his Dropbox account. He doesn't let anyone see the VCD, especially his roommates who often have access to his devices.

// Opening the Dropbox mobile app on the VIU's tablet requires a four-digit passcode. To ensure the confidentiality of the stored information, the device is locked out of Dropbox after 10 consecutive failed passcode attempts. We need to implement a function that given an array of attempts made throughout the day and the correct passcode checks to see if the device should be locked, i.e. 10 or more consecutive failed passcode attempts were made.

// Example

// passcode = "1111" and
// attempts = ["1111", "4444",
//             "9999", "3333",
//             "8888", "2222",
//             "7777", "0000",
//             "6666", "7285",
//             "5555", "1111"]
// the output should be
// incorrectPasscodeAttempts(passcode, attempts) = true.
// The first attempt is correct, so the user must have successfully logged in. However, the next 10 consecutive attempts are incorrect, so the device should be locked. Thus, the output should be true.

function incorrectPasscodeAttempts(passcode, attempts) {
    let consecutiveAttempts = 0;
    
    for(let i = 0; i < attempts.length; i++){
        if(passcode !== attempts[i])
            consecutiveAttempts++;
        else
            consecutiveAttempts = 0;
        if(consecutiveAttempts >= 10)
            return true;
    }
    return false;
}
