/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

 //T: O(nlogn) with n being each el in the arr (length of input arr)
 //S: O(1) since sorting mutates original arr in place
 var sortBy = function(arr, fn) {
    return arr.sort((a,b)=> fn(a) - fn(b)) 
};