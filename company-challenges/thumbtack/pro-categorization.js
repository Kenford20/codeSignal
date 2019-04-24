// Thumbtack helps Professionals (Pros) grow their business by identifying new customers. Upon registering on Thumbtack, a Pro specifies which categories of services they provide. To help match customer requests with qualified Pros, Thumbtack maintains a list of Pros grouped by service categories.

// Given a list of pros and their category preferences, return the list of Pros for each category.

// Example

// For pros = ["Jack", "Leon", "Maria"] and

// preferences = [["Computer repair", "Handyman", "House cleaning"],
//                ["Computer lessons", "Computer repair", "Data recovery service"],
//                ["Computer lessons", "House cleaning"]]
// the output should be

// proCategorization(pros, preferences) = [[["Computer lessons"], ["Leon", "Maria"]],
//                                         [["Computer repair"], ["Jack", "Leon"]],
//                                         [["Data recovery service"], ["Leon"]],
//                                         [["Handyman"], ["Jack"]],
//                                         [["House cleaning"], ["Jack", "Maria"]]]

// * INPUT: A sorted non-empty array of unique strings consisting of English letters.
// * Here and below we assume that strings are sorted lexicographically.

function proCategorization(pros, preferences) {
    let output = [];
    let uniquePreferences = [];
    
    preferences.map(pref => {
        pref.map(service => {
            if(!uniquePreferences.includes(service)) {
                uniquePreferences.push(service);
            }
        });
    });
    
    uniquePreferences.map(uniquePref => {
        let currPros = [];
        preferences.map((pref, i) => {
            if(pref.includes(uniquePref)) {
                currPros.push(pros[i]);
            }
        })
        output.push([[uniquePref], currPros]);
    });
    return output.sort((a, b) => a[0][0] > b);
}

// refactored
function proCategorization(pros, preferences) {
    let output = [];
    let uniquePreferences = [];
    
    preferences.map(prefsArr => prefsArr.map(service => {
        if(!uniquePreferences.includes(service)) {
            uniquePreferences.push(service);
            let currPros = [];
            
            preferences.map((pref, i) => {
                if(pref.includes(service)) {
                    currPros.push(pros[i]);
                }
            });
            output.push([[service], currPros]);
        }
    }));
    return output.sort((a, b) => a[0][0] > b);
}

