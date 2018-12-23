// Note: we'll be covering this problem on the livestream today!

// During the holiday season you go through a lot of candles! You burn many candles of various sizes, represented by the array candleSizes.

// You prefer big candles, so you always light the biggest candle available at the time.

// For every n candles you burn, you can use the remaining wax to create a new candle! The size of this new candle will depend on the sizes of the n candles you got the wax from. More specifically, the size of the new candle will be equal to the sum of the sizes of the n candles, divided by n + 1 (rounded down).

// Given candleSizes and n, your task is to find the sum of the sizes of all candles burned!

// Notes:

// If the size of the new candle would be rounded down to zero, there isn't enough wax to make a new candle.
// You can't make a new candle with fewer than n leftovers.
// Example

// For candleSizes = [2, 181, 32, 188, 188] and n = 3, the output should be burningCandles(candleSizes, n) = 773.

// There's a tie for biggest candle, so you'll burn one of the 188 ones. The total is now 188 and the remaining candles are [2, 181, 32, 188].
// You can now burn the other 188 candle. The total is now 376 and the remaining candles are [2, 181, 32].
// The next biggest candle is 181, and since you've now burned 3 (n) candles, you can make a new one! It will have a size of floor((188 + 188 + 181) / 4) = 139. So the total is now 557 and the remaining candles are [2, 32, 139].
// You'll burn the 139 candle next, since it's by far the biggest. The total is now 696 and the remaining candles are [2, 32].
// The next candle will be the 32, so the total is now 728, and only [2] remains.
// You burn the 2 next, and it seems like we're all out of candles now, but since you've now burned another 3 candles, you can make another new one! This one will have a size of floor((139 + 32 + 2) / 4) = 43. So the total is now 730 with [43] remaining.
// You now burn the final candle (43) for a total of 773.

function burningCandles(candleSizes, n) {
    candleSizes.sort((a,b) => b - a);
    let candleSizesSum = 0;
    let numCandles = 0;
    let newCandle = [];
    
    while(candleSizes.length > 0){
        candleSizesSum += candleSizes[0];
        newCandle.push(candleSizes[0]);
        candleSizes.shift();
        numCandles++;
        if(numCandles % n === 0){
            newCandle = [Math.floor(newCandle.reduce((a,b) => a + b) / (n+1))];
            candleSizesSum += newCandle[0];
            numCandles++;
        }
    }
    return candleSizesSum;
}
