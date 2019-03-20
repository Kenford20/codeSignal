// Your task is to write a function that prints out the nth card of the standard card deck. Each of the cards has a rank which can be, in order of ascending value, a number in range from 2 to 10 (depicted as '0'), a Jack ('J'), a Queen ('Q'), a King ('K'), or an Ace ('A'). Each of the cards also has a suit: clubs ('C'), diamonds ('D'), hearts ('H'), or spades ('S').

// The cards in the deck are sorted first by their suits in lexicographical order, and then by the value of their ranks. Return the nth (0-based) card in the deck as a string with a length of two, with the first character representing the rank and the second character representing the suit.

// Example

// For n = 0, the output should be
// cards(n) = "2C".

// The very first card in the deck is 2 of clubs, so the answer is "2C".

// For n = 34, the output should be
// cards(n) = "OH".

// The 34th card in the deck is 10 of hearts, making the answer "0H".

function cards(n) {
    let cards = '234567890JQKA';
    let suits = 'CDHS';
    
    return cards[n % 13] + suits[Math.floor(n/13)];
}
