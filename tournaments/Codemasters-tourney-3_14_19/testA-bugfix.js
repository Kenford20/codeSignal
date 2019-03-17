// There is a bug in one line of the code. Find it, fix it, and submit.
// A new parking lot just opened in your city. Its rates are:

// The first 30 minutes (inclusive) of parking are free;
// From 31 minutes to 2 hours, every 10 minutes costs $1;
// Every 10 minutes over 2 hours costs $2.
// Since you are charged for every 10 minutes, you should round the number of minutes spent in the parking lot up to the nearest multiple of 10. For example, if you've been in the parking lot for 43 minutes, you will pay for 50 minutes.

// You are given 2 strings: The time you typically arrive at your usual parking lot, and the time you typically leave it. Now you want to know how much you'll have to pay at the new parking lot. It's guaranteed that all events take place in one day.

function parkingCost(timeIn, timeOut) {
    var diff = parseInt(timeOut.substring(0, 2), 10) * 60 +
              parseInt(timeOut.substring(3), 10) -
              parseInt(timeIn.substring(0, 2), 10) * 60 -
              parseInt(timeIn.substring(3), 10);

    if (diff >= 30) { // change this line to diff <= 30
      return 0;
    }
    if (diff <= 120) {
      return Math.floor((diff - 21) / 10);
    }
    return 9 + Math.floor((diff - 111) / 10) * 2;
  }
  