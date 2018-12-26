// You like to spend time during winter holidays in Starbucks. One of the reasons is that nice winter songs are being played there. But there is one thing you don't like - they use to play the same songs from time to time. You decided to find out how long you can sit there and drink your coffee without listening any song twice.

// Given a playlist of holiday music for today in array songs, find the longest interval of time (in seconds) when you won't hear any song twice. Each song is given in format "<songName> (m:ss)".

// Example

// For songs = ["A (1:30)", "B (2:00)", "A (1:30)", "C (1:00)"], the output should be playlistLongestInterval(songs) = 270.

// The longest interval of not repeating songs is ["B (2:00)", "A (1:30)", "C (1:00)"], so the output should be 120 + 90 + 60 = 270 seconds.

// I misinterpreted the description and thought you could play the songs in any order
// so this solution works only if rearranging of the songs is allowed
function playlistLongestInterval(songs) {
    let uniqueSongs = songs.filter((song, index) => songs.indexOf(song) === index);
    let songsInterval = 0;
    let minutesInSeconds = 0;
    let seconds = 0;
    
    for(let i = 0; i < uniqueSongs.length; i++){
        let songDuration = uniqueSongs[i].slice(uniqueSongs[i].indexOf('('));
        // two digit minutes
        if(songDuration.length === 7){
            minutesInSeconds = (parseInt(songDuration[1]) * 10 + parseInt(songDuration[2]))*60;
        } 
        else
            minutesInSeconds = parseInt(songDuration[1]) * 60;

            seconds = parseInt(songDuration[3]) * 10 + parseInt(songDuration[4]);
        songsInterval += minutesInSeconds + seconds;
    }
    return songsInterval;
}
