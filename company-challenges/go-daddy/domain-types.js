// GoDaddy makes a lot of different top-level domains available to its customers. A top-level domain is one that goes directly after the last dot ('.') in the domain name, for example .com in example.com. To help the users choose from available domains, GoDaddy is introducing a new feature that shows the type of the chosen top-level domain. You have to implement this feature.
// To begin with, you want to write a function that labels the domains as "commercial", "organization", "network" or "information" for .com, .org, .net or .info respectively.
// For the given list of domains return the list of their labels.

// Example

// For domains = ["en.wiki.org", "codesignal.com", "happy.net", "code.info"], the output should be
// domainType(domains) = ["organization", "commercial", "network", "information"].

function domainType(domains) {
    let domainTypes = [];
    
    for(let i = 0; i < domains.length; i++){
        let topLevelDomain = domains[i].slice(domains[i].lastIndexOf('.'));
        
        switch(topLevelDomain){
            case '.com': domainTypes.push('commercial'); break;
            case '.org': domainTypes.push('organization'); break;
            case '.net': domainTypes.push('network'); break;
            case '.info': domainTypes.push('information'); break;
        }
    }
    return domainTypes;
}
