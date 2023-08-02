/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    //Edge Case: i is a string so it concatenates.
    //Convert index to number

    const res = []
    
    for(let i in arr){ //Faster to use for loop with pointer let  i=0 to avoid having to convert i to number
      fn(arr[i],Number(i))?res.push(arr[i]):false
    }
    return res
};