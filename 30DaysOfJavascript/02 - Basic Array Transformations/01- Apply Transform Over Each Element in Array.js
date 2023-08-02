/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    //Edge case, if index is added to value, it will return a string
    //So convert each index to number

    const res = []
    for(let i in arr){
        res.push([fn(arr[i], Number(i))]) 
    }
    return res
};