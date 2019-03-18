// You're about to purchase an island of the Polygon Islands, and you want to calculate the total price of your purchase. Since you are also going to build a fence around its perimeter in case of a zombie apocalypses, you would also like to add its cost to the calculated price.

// All islands of the Polygon Islands are, obviously, polygons. Moreover, they are regular, which means that all their sides and angles are equal. The island you are interested in has n sides of length s each.

// Each square meter of the land costs prices[0], and each meter of fence will cost you prices[1].

// Given n, s and prices, calculate the amount of money you need to buy an island and build a fence around it. You need to write a check for you expenses, so the result should be rounded to two decimal places and be returned as a string.

// Example

// For n = 4, s = 5 and prices = [3, 1], the output should be

// polygonPlotOfLand(n, s, prices) = "95.00".

// The island is a square with sides of length 5. The land will cost (5 * 5) * 3 = 75, and the fence will cost (5 * 4) * 1 = 20. Thus, the total price is 75 + 20 = 95.

function polygonPlotOfLand(n, s, prices) {
    let perimeter = n * s;
    let area =  0.25 * n * (s*s) / Math.tan(Math.PI/n);

    return parseFloat(area*prices[0] + perimeter * prices[1]).toFixed(2);
}
