// Concatenate given strings using a specific separator.

// Example

// For strings = ["Code", "Fight", "On", "!"] and separator = "/", the output should be
// myConcat(strings, separator) = "Code/Fight/On/!/".

function myConcat(strings, separator) {
    return strings.join(separator) + separator;
}
