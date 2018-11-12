// In tennis, a set is finished when one of the players wins 6 games and the other one wins less than 5, or, if both players win at least 5 games, until one of the players wins 7 games.

// Determine if it is possible for a tennis set to be finished with the score score1 : score2.

function tennisSet(score1, score2) {
    
    if(score1 === 7)
        return score2 >= 5 && score2 < 7;
    else if(score2 === 7)
        return score1 >= 5 && score1 < 7;
    else if(score1 === 6)
        return score2 < 5;
    else if(score2 === 6)
        return score1 < 5;
    else return false;  
}