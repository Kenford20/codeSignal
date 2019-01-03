// Hey this is a reverse challenge!
// A reverse challenge is a special type of challenge, where no description is provided! You have to solve two challenges in one: find out what the author wants from you and write a solution. Check out this page for more information.

// Test Cases:

// Input: 
// time: "1:23PM"
// Expected Output: "12:23PM"

// Input:
// time: "4:57AM"
// Expected Output: "3:57AM"

// Input:
// time: "12:38PM"
// Expected Output: "11:38AM"

function fallBack(time) {
    let hour = parseInt(time.slice(0, time.indexOf(':')));
    let minutes = time.slice(time.indexOf(':'));

    if(hour === 1)
        return '12' + minutes;
    else if(hour == 12){
        if(time[time.length - 2] === 'P')
            minutes = minutes.replace(/P/, 'A')
        else
            minutes = minutes.replace(/A/, 'P');
    }
    return (hour - 1).toString() + minutes;
}
