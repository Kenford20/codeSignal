// A number is lonely if it only appears in a list once. If a number appears in the list twice it is not lonely. 
// Given a list of numbers where every number in the list appears twice except one number that appears only once. 
// You need to find the lonely number.

function LonelyNumber(nums) {
    let AreNumsLonely = nums.map(num => nums.indexOf(num) === nums.lastIndexOf(num));
    return nums[AreNumsLonely.indexOf(true)];
}
