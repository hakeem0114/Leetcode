/**
 * @param {number[]} nums
 * @return {number}
 */

 //O(n+n) = O(n)
 var longestConsecutive = function(nums) {
    // nums = [100,4,200,1,3,2]

    //  1,2,3,4......100,......200,....

    // Edge Case to start a series count (n-1)
        //element has no left child so start counting the length of a series

    // 100-1 => length of 1 -> n+1 exists? no then length =1
    // 4-1 = 3 is in arr (Don't start series)
    // 200-1 => length of 1 -> n+1 exists? no then length =1
    //1-1 => n+1 exists? yes. n+1 stops at 3+1 => length = 4

    const set = new Set(nums) //remove duplicates
    let longestSequence = 0
    let length = 0

    //O(n+n) not n^2 since while loop is not executed for each iteration
    for(let num of set){ 
        if(!set.has(num-1)){ //If set does not have num before it{#1 behind #2} 
            //Start sequence 
            length = 1

            while(set.has(num+1)){ //If Set has 
                length++ //Increment length after finding next num
                num++ //Increment for next iteration
            }
        }
    
        longestSequence = Math.max(length, longestSequence)
    }

    return longestSequence 
};

