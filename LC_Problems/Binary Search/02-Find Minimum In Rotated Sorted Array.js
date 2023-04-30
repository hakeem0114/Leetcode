/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    /*A rotated sorted array =>  sorted in ascending order & rotated
        nums = [1,2,3,4,5]

        rotate 1
        nums = [5,1,2,3,4]

        rotate 2nd
        nums = [4,5,1,2,3]

        rotate 3rd
        nums = [3,4,5,1,2]

        *The min of the original sorted array is at start
        *After rotation, index[0]= max so, left side of index[middle] will always
            be greater than right

        2. logn = binary search

    */ 

    let left = 0
    let right = nums.length-1
    let middle = 0

    //Compare left & right to middle
    while(left< right){
        middle = Math.floor((left + right)/2)

        //nums[left] < nums[middle] would never happen since nums[left] will always be > nums[middle]

        if(nums[right] < nums[middle]){
            //Inflection point is after the middle

            //Move left pointer to nums after middle
            left = middle +1
        }else{
            //nums[left] >= nums[middle]
            right = middle
        }
        
    }return nums[left] 
};