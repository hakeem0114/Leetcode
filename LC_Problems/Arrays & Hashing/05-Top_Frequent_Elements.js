/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 //O(n)
 var topKFrequent = function(nums, k) {
    const map={} 
    let bucket = []
    let result = []

    //Create Frequency Map
    for(let i=0;i<nums.length;i++){
        //If value exists as a key in map
        if(map[ nums[i] ]!= undefined){
            //Increment the frequency counter
            map[ nums[i] ]++
        }else{
            //Create a new key:value (freq = 1) pair in freq map
            map[ nums[i] ] = 1
        }
    }

    //Populate the bucket with freq map in preparation for bucket sort
    for (const [num, freq] of Object.entries(map) ){ //for of to iterate over key:value pairs objects
        //If bucket cannot be found, 
        if(!bucket[freq]){
            //Create a new bucket to hold the number corresponding to its freq
            bucket[freq]  = new Set().add(num) // bucket[freq => 2 =>occurences] = [ [#1] ] 
        }else{
            //Bucket is not empty, replace buckey with a new # to the old freq bucket
            bucket[freq] =  bucket[freq].add(num) // bucket[freq => 2 =>occurences] = [ [#1, #2] ] 
                                                    // bucket[freq => 1 =>occurences] = [   [#3] ]
        }
                
    }
    

    //Return k most frequent elements by iterating through bucket starting from right end.
    for(let i=bucket.length-1; i>0;i--){ // 5, 5>0; 4// 4;4>0;3
        //If bucket exists, pust k most element into result arr
        if(bucket[i]){
            result.push(...bucket[i])
        }

        //Stop accepting results once we get "k" # of elements
        if(result.length === k) break
        
    }return result

};
/*
Frequency map to hold values & its occurences
map ={
    value | frequency
    "1": 3,
    "2": 2,
    "3": 1
}

*/

/* Bucket Sort used to solve hashMap collissions
In this case, 
nums = [1,1,1,2,2,3,6], k = 2
If #3 occurs, 1 times, put it in the index of 1

Count/Index  |  0   1    2   3   4
             |
    buckets  | []  [3,6]   [2]  [1]  []

Loop from ends of array, k++ & break loop once k=# is reached.

*/