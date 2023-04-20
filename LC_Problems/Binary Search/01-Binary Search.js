/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 //O(logn)
 var search = function(nums, target) {
    
    let left  = 0
    let right = nums.length-1 //Last element


while(left <= right){ //Move left & right points towards target 
    let middle = Math.floor(nums.length /2) //Half arr per iteration = O(Logn)

    //Base Case to find & exit binary search
    if(target === nums[middle]) return middle 

    if(target < nums[middle]){ //Then target is btwn left & middle index
        right = middle -1 //Since middle has already been checked, move to num before middle
    }
    if(target > nums[middle]){
        left =  middle +1
    }
}return -1 //If false
 
};