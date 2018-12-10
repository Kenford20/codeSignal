// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.

function validTime(time) {
    return parseInt(time[0]) * 10 + parseInt(time[1]) < 24 && parseInt(time[3]) * 10 + parseInt(time[4]) < 60;          
}
