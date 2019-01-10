// You have some tasks in your Asana account. For each ith of them you know its deadlinesi, which is the last day by which it should be completed. As you can see in your calendar, today's date is day. Asana labels each task in accordance with its due date:

// If the task is due today or it's already overdue, it is labeled as Today;
// If the task is due within a week but not today - that is, its deadline is somewhere between day + 1 and day + 7 both inclusive - it is labeled as Upcoming;
// All other tasks are labeled as Later;
// Given an array of deadlines and today's date day, your goal is to find the number of tasks with each label type and return it as an array with the format [Today, Upcoming, Later], where Today, Upcoming and Later are the number of tasks that correspond to that label.

// Example

// For deadlines = [1, 2, 3, 4, 5] and day = 2, the output should be
// tasksTypes(deadlines, day) = [2, 3, 0].

// Today is day 2, so tasks with deadlines at 1 and 2 are labeled as Today. The other three tasks should be completed within a week, so they should be labeled as Upcoming. There are no tasks labeled as Later.

function tasksTypes(deadlines, day) {
    deadlines = deadlines.sort((a, b) => a - b);
    const deadlineLabels = {
        today: 0,
        upcoming: 0,
        later: 0
    };
    let { today, upcoming, later } = deadlineLabels;
    
    for(let i = 0; i < deadlines.length; i++){
        if(deadlines[i] <= day)
            today++;
        else if(deadlines[i] > day + 7)
            later++;
        else
            upcoming++;
    }   
    return [today, upcoming, later];
}

