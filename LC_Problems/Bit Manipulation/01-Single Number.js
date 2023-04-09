/**
 * @param {number[]} nums
 * @return {number}
 */

//Time: O(1) & Space: O(1)
var singleNumber = function(nums) {
    let xorNum = 00 // ^= XOR logic.. 1 XOR 0 = 1, 0 XOR 0 =1

    for(let i=0;i<nums.length;i++){
        // 1 = 01, 2 =10, 3 =11, 4 =100
        //nums = [2,2,1]
        //  ^= 0 XOR 10 = 10 (number appears once) = 2
        //  ^= 10 XOR 10 = 00 (Number appears twice)  = 0
        // 01 XOR 00 = 10 (number appears once)
        xorNum ^= nums[i]
    } return xorNum  //Returns the last number that appears once the loop ends
};