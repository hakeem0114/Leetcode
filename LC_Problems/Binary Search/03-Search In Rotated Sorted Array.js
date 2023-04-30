/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left =0
    let right = nums.length -1 
    let middle = 0
    
    while(left<= right){ 
        middle = Math.floor((left+right)/2)

        if(nums[middle] === target)return middle

        //Check if target is in the right rotated & sorted side
        // if(nums[right] < nums[middle]){ //, left side is rotated sorted
        if(nums[right] > nums[middle]){ //Right side is rotated sorted
            if(target > nums[middle] && target <= nums[right] ){
                left = middle +1   //Can't include middle since it will be edge case to exit loop     
            }else{
                //Target is in the other side of array
                right = middle - 1  //Can't include middle since it will be edge case to exit loop
            }
        }else{
            //Rotated Side of array on left
            if(target < nums[middle] && target >= nums[left] ){
                right = middle -1       
            }else{
                //Answer is on other side
                left = middle +1
            }
        }
    }return -1

};
    /*
    nums = [4,5,6,7,0,1,2], target = 0

    One side is rotated, the other is sorted so, 
    - Check where the rotated & sorted array is: 
        *if(nums[middle] > nums[right]){
            right side is sorted
            left side is rotated

            //Since we always know that the rotated side will always be inorder, check rot first
            
            if( target <= nums[middle] && target >= nums[left]  ){
                //target is here
                right = middle
            }else{
                //target is on the other side
                left = middle +1
            }
            if(target === nums[middle]) return middle
        } 
        else{ 
            left side is sorted
            right side is rotated

                        
            if( target > nums[middle] && target <= nums[right]  ){
                //target is here
                left = middle +1
            }else{
                //target is on the other side
                right = middle
            }
            if(target === nums[left]) return left        }

    */
