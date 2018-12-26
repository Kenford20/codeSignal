// This is a reverse challenge, enjoy!

// Example

// For s = "Hello", the output should be isSanta(s) = "Hey, someone! Merry Christmas and have a nice day!";
// For s = "Merry Chrismas, hohoho!", the output should be isSanta(s) = "It is Santa! Merry Christmas and a Happy New Year!".

function isSanta(s) {
    return /hohoho/i.test(s) ? 'It is Santa! Merry Christmas and a Happy New Year!' : 'Hey, someone! Merry Christmas and have a nice day!';
}
