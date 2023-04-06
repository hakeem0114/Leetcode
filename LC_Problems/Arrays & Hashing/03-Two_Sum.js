/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i< nums.length ;i++){ //Loop from 1st index
        for(let j= i+1; j< nums.length; i++){ //Loop through starting from the 2nd index
            if(nums[i]+ nums[j] === target){
                return [i, j]
            }
        }
    }

};
//Time: O(n^2)
// Space O(1)