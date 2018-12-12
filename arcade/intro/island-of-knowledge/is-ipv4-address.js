// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255 inclusive, separated by dots, e.g., 172.16.254.1.

// Given a string, find out if it satisfies the IPv4 address naming rules.

function isIPv4Address(inputString) {
    let charRegex = /[a-z]/;
    inputString = inputString.split('.');
    
    // return false if there are not 4 sets of numbers
    if(inputString.length !== 4)
        return false
    // return false if the sets of chars are not an integer between 0 and 256 or if its empty     
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] < 0 || inputString[i] >= 256 || inputString[i] === '' || charRegex.test(inputString[i]))
            return false;
    }
    return true;
}