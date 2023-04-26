/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//O(n^2)
var rotate = function(nums, k) { //k=1
    let count =0 

    while(count < k){ //0 //1 !< 1 so end loop
        nums.unshift(nums.pop()) //Add to from of array
        count++ //1
    }
};