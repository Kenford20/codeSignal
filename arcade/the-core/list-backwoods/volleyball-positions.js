// You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. Now you're curious about how the coach arranged the players on the field at the start of the game.

// The team you favor plays in the following formation:

// 0 3 0
// 4 0 2
// 0 6 0
// 5 0 1
// where positive numbers represent positions occupied by players. After the team gains the serve, its members rotate one position in a clockwise direction, so the player in position 2 moves to position 1, the player in position 3 moves to position 2, and so on, with the player in position 1 moving to position 6.

// Here's how the players change their positions:
// Given the current formation of the team and the number of times k it gained the serve, find the initial position of each player in it.

// Example

// formation = [["empty",   "Player5", "empty"],
//              ["Player4", "empty",   "Player2"],
//              ["empty",   "Player3", "empty"],
//              ["Player6", "empty",   "Player1"]]
// and k = 2, the output should be
// volleyballPositions(formation, k) = [
//     ["empty",   "Player1", "empty"],
//     ["Player2", "empty",   "Player3"],
//     ["empty",   "Player4", "empty"],
//     ["Player5", "empty",   "Player6"]]

function volleyballPositions(formation, k) {
    for(let i = 0; i < k % 6; i++){
        let temp = formation[0][1];
        formation[0][1] = formation[1][2];
        formation[1][2] = formation[3][2];
        formation[3][2] = formation[2][1];
        formation[2][1] = formation[3][0];
        formation[3][0] = formation[1][0];
        formation[1][0] = temp;
    }
    return formation;
}
