// An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").

// The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.

// Given a valid email address, find its domain part.

function findEmailDomain(address) {
    let isDomain = /^\@[a-z]+\.[a-z]+$/;
    let strWithAtSign = address.slice(address.indexOf('@'));
    
    if(address.indexOf('@') === -1) 
        return 'null';
    if(isDomain.test(strWithAtSign))
        return strWithAtSign.slice(1);
    
    // there is an '@' in the local part of the email address
    while(!isDomain.test(strWithAtSign)){
        strWithAtSign = strWithAtSign.split('');
        strWithAtSign.splice(0,1); // remove the current '@' then slice the next section starting with '@'
        strWithAtSign = strWithAtSign.slice(strWithAtSign.indexOf('@')).join('');
    }
    return strWithAtSign.slice(1);
}

// above was my initial solution to handle potential '@' chars in the local part 
// afterwards I discovered that lastIndexOf was a method that exists lol!
function findEmailDomain(address) {
    return address.slice(address.lastIndexOf('@') + 1);
}
// after reviewing others' solutions, it seems splitting on '@' and returning the last element was a simpler solution as well
// or slicing on '@' and iterate backwards through the sliced string (also gets you the last '@' occurence)