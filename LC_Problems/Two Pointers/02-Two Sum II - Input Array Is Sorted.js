/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 //O(N)
 var twoSum = function(numbers, target) {
    const hashMap = {}
    //Add key(nums[i]): value(index) to hashMap
    for(let i =0;i<numbers.length;i++){ //Start index from 1->end of arr
            //Get the complement #
            let complement = target - numbers[i] //6-2 = 4 //6-3 = 3//6-4 = 2

            //If the complement is in the hashMap, return [1, #]
            if(hashMap[complement] !=undefined){ // !2,!3, yes 2 
               return [hashMap[complement]+1, i+1] // 0+1, 2+1 = [1,3]
            }
          //Create a new key(nums[i]):value(index) pair
            hashMap[ numbers[i] ] = i // {"4":0, "3":1, }


    }

};