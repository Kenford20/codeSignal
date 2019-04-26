// A Thumbtack customer has just submitted a request for a house painter to paint a one bedroom house in San Francisco. Our job is to find Pros who provide this service and whose travel distance preference is ideal for the job. To measure how well the Pro and the request match, we calculate their matching score and non-matching score as follows:

// if the Pro's distance from the customer's house does not exceed their maximum preferred travel distance, then their matching score equals the distance between the pro and the customer;
// otherwise we calculate a non-matching score as the difference between the distance from the pro to the customer, and their maximum preferred travel distance.
// For example, let's say a pro Jane has a maximum travel distance of 10 miles.

// If a customer is located 5 miles away, their matching score is 5 miles.
// If a customer is located 12 miles away, their "non-matching" score is 2 miles.
// To select the top 5 Pros, we sort them so that those who have a matching score are always shown before those who have a non-matching score, and both matching scores and non-matching scores are sorted in ascending order. If two or more Pros have equal scores, they are sorted by their names in lexicographical order.

// You're given a list of pros who match the "house painting" category, their distances from the customer's house, and their travelPreferences, which denotes the maximum distance each Pro is willing to travel for a given job. Return the top 5 Pros sorted as described above. If there are fewer than 5 Pros, return them all.

// Example

// For
// pros = ["Michael", "Mary", "Ann", "Nick", "Dan", "Mark"],
// distances = [12, 10, 19, 15, 5, 20], and
// travelPreferences = [12, 8, 25, 10, 3, 10], the output should be
// requestMatching(pros, distances, travelPreferences) = ["Michael", "Ann", "Dan", "Mary", "Nick"].
// Here's how Pros will be sorted in accordance with their scores:

// "Michael": matching score equals 12;
// "Ann": matching score equals 19;
// "Dan": non-matching score equals 5 - 3 = 2;
// "Mary": non-matching score equals 10 - 8 = 2;
// "Nick": non-matching score equals 15 - 10 = 5;
// "Mark": non-matching score equals 20 - 10 = 10.

// For
// pros = ["Ann", "Michael", "Mary"],
// distances = [5, 5, 5], and
// travelPreferences = [3, 10, 7], the output should be
// requestMatching(pros, distances, travelPreferences) = ["Mary", "Michael", "Ann"].

function requestMatching(pros, distances, travelPreferences) {
    let matchedScores = {};
    let nonmatchedScores = {};
    
    // create objects to map pros to their distance scores
    for(let i = 0; i < distances.length; i++) {
        let pro = pros[i];
        if(travelPreferences[i] >= distances[i]) {
            matchedScores[pro] = distances[i];
        } else {
            nonmatchedScores[pro] = distances[i] - travelPreferences[i];
        }
    }
    
    // create arrays of the key value pairs from above for sorting purposes 
    let matchedPros = [];
    for(let pros in matchedScores) {
        matchedPros.push([pros, matchedScores[pros]]);
    };
    
    let nonmatchedPros = [];
    for(let pros in nonmatchedScores) {
        nonmatchedPros.push([pros, nonmatchedScores[pros]]);
    }
    
    // do a lexicographical sort if pros scores are equal or a numerical sort based on their scores otherwise
    function numStringSort(arr) {
        return arr.sort((a, b) => {
            if(a[1] === b[1]) {
                return a[0] > b[0]; // lexicographical sort of the pros' names
            } else {
                return a[1] - b[1]; // numerical sort of the pros' scores
            }
        });
    }
    //console.log(numStringSort([['Anna', 1], ['Annabelle', 1], ['Beatrice', 1], ['An', 1], ['Ann', 1]]))

    matchedPros = numStringSort(matchedPros).map(pro => pro[0]);
    nonmatchedPros = numStringSort(nonmatchedPros).map(pro => pro[0]);
    
    if(pros.length < 5) {
        return matchedPros.concat(nonmatchedPros);
    } else if(matchedPros.length >= 5) {
        return matchedPros.slice(0, 4);
    } else {
        let numNonmatchedPros = 5 - matchedPros.length;
        for(let i = 0; i < numNonmatchedPros; i++) {
            matchedPros.push(nonmatchedPros[i]);
        }
        return matchedPros;
    }
}
