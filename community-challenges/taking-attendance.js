// Substitute teaching has its benefits and drawbacks - while you don't have to deal with the demanding workload of a full-time teacher, you also don't usually get a chance to build a strong rapport with the students.

// One consequence of this is that the students' names are all unfamiliar to you, so calling out the attendance list can take some time. After receiving the class list, before class starts, you take a moment to scan the names in order to estimate how much time each name will take. You can use the following formula:

// Each name takes a minimum of 5 seconds, regardless of how simple it is (to allow time for the student to respond, etc)
// It might take more time to pronounce the name properly, depending on how many consecutive consonants it has
// A single consonant adds 1 additional second
// A double consonant adds 2 more seconds
// A triple consonant adds 4 more seconds
// A quadruple consonant adds 8 seconds, etc
// For example, the name "Thompson" contains a group of 2 consonants ("Th"), followed by a group of 3 ("mps"), and finally a single one more ("n"), for a total of 5 + 2 + 4 + 1 = 12 seconds.
// We'll treat "y" as a vowel in all cases.
// Given the full list of students' names, your task is to return an estimate of how long it'll take to get through the whole list.

// Example
// For classList = ["Ashley", "Robert", "Miles", "Archibald", "Taylor", "Vanessa", "Isaac"], the output should be takingAttendance(classList) = 62.

// Ashley - 5 + 4 = 9
// Robert - 5 + 1 + 1 + 2 = 9
// Miles - 5 + 1 + 1 + 1 = 8
// Archibald - 5 + 4 + 1 + 2 = 12
// Taylor - 5 + 1 + 1 + 1 = 8
// Vanessa - 5 + 1 + 1 + 2 = 9
// Isaac - 5 + 1 + 1 = 7
// So the attendance will take a total of 9 + 9 + 8 + 12 + 8 + 9 + 7 = 62 seconds.

function takingAttendance(classList) {
    let attendanceTime = 0;
    
    classList.map(studentName => {
        studentName = studentName.split(/[aeiouy]/i).filter(consonants => consonants !== '');
        for(let i = 0; i < studentName.length; i++){
            let letters = studentName[i].split('');
            let pronunciationTime = 1;
            for(let j = 1; j < letters.length; j++){
                pronunciationTime *= 2;
            }
            attendanceTime += pronunciationTime;
        }
        attendanceTime += 5;
    });
    return attendanceTime;
}

// refactored solution without two for loops after thinking about the math that relates the consonant letters to the pronunciation time
function takingAttendance(classList) {
    let attendanceTime = 0;
    
    classList.map(studentName => {
        let consonants = studentName.split(/[aeiouy]/i).filter(letters => letters !== '');
        attendanceTime += 5;
        consonants.map(consonantGroup => attendanceTime += Math.pow(2, (consonantGroup.length - 1)));
    });
    return attendanceTime;
}
