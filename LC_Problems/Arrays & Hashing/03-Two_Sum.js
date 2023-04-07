//Hashmap: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let hashMap = {}

    for(let i=0;i< nums.length; i++){
        
        //complement = neededNumber = target - nums[i]
        let complement = target -nums[i]

        //If complement is in the hashmap, return 2sum
        if(hashMap[complement] != undefined){
            return [i, hashMap[complement]]
        }else{
            
            //Else, add the complement & its index to the hashMap for the next iteration
            //Store the complement as a key to find the index { "3": index =0}

            hashMap[nums[i]] = i // Store compliment as a key in hashMap with the index as its value
        }


    }

};

/*Test: nums[3,2,4] t= 6

//i=0
nums[0] = 3
hashMap={
    "3": 0
}

//i=1
nums[1] = 2
hashMap={
    "3": 0,
    "4": 1  //2sum
}

//i=2
nums[2] = 4
hashMap ={
    "3": 0,
    "4": 1, //2sum
    "2": 2
}

*/




//2 For loops
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