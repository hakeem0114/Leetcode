/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//O(n)
var topKFrequent = function(nums, k) {
    const freqMap ={}
    const bucket = []
    const result =[]

    //FreqMap for key(num):value(freq)
    for(let i=0; i<nums.length;i++){
        if(!freqMap[i]){ 
            freqMap[ nums[i] ] = 1 //freq starts at 1 occurence
        }else{
            freqMap[ nums[i] ]++
        }
    }

    //Bucket Sort with an array of [...index(freq):value([num#, num#])] per freq
    for(const [num, freq] of Object.entries(freqMap)){
        if(!bucket[freq]){
            bucket[freq] = new Set().add(num)
        }else{
            bucket[freq].add(num)
        }
    }

    //Print the solution by looping from last el in array(most freq)
        //Break loop when length of answer array/object == k
    for(let i=bucket.length -1; i>=0;i++){
        if(bucket[i]){//If bucket exists
            result.push(...bucket[i])
        }

        if(result.length === k) break //Once k # of results is reached, break loop
    }

    return result

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

Loop from end of array, k++ & break loop once k=# is reached.

*/