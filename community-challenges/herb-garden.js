// You love cooking with fresh herbs, so you've been trying to grow an herb garden at home! Every day you harvest one of your plants, removing half of its leaves (rounded down), and every night, each of the plants grows 2 new leaves.

// Given plants, an array of integers representing the number of leaves on each plant, your task is to determine the maximum number of leaves you can harvest in total, over the course of a given number of days (represented by the integer days).

// Example

// For plants = [2, 7, 5, 3] and days = 3, the output should be herbGarden(plants, days) = 10.

// plants before harvesting	plant to harvest	plants after harvesting	total leaves harvested
// [2, 7, 5, 3]	1	[2, 4, 5, 3]	3
// [4, 6, 7, 5]	2	[4, 6, 4, 5]	6
// [6, 8, 6, 7]	1	[6, 4, 6, 7]	10

function herbGarden(plants, days) {
    let numLeaves = 0;
    let largestPlant;
    
    while(days > 0) {
        largestPlant = Math.max(...plants);
        numLeaves += Math.floor(largestPlant / 2);
        console.log('added: ' + Math.floor(largestPlant / 2));
        console.log(numLeaves);
        plants.splice(plants.indexOf(largestPlant), 1, Math.ceil(largestPlant / 2));
        
        plants = plants.map(plant => plant + 2);
        console.log(plants);
        days--;
    }
    return numLeaves;
}