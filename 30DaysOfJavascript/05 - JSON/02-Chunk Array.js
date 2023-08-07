/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */

 //T: O(prev+size) due to slice
 //S: O(n) due to slice creating a new arr
 var chunk = function(arr, size) {

    let result = []

    //Edge Case:
    if(arr.length === 0)return []

    //Chunk
    let prev = 0
    let bucket 
    let originalLength = arr.length


    while(originalLength > prev){
           bucket = arr.slice(prev, prev+ (size) ) 
            result.push(bucket) 
           prev =  size + prev //Update slice start for next iteration
    }

    return result

};