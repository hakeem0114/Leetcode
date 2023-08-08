/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */

//T: O(n) , n is the number of traversed el in arr
//S: O(n) , n being the recursion calling function for each el in arr: [[], []...]

var flat = function (arr, n) {
    let depth  = 0 
    let result = []

    function helper(arr,depth){
        for(let el of arr){
            if(Array.isArray(el) && depth < n){ //or is typeof el === 'object'
                helper(el,depth+1)
            }else{
                result.push(el)
            }
        }
    }
    helper(arr,depth)

    return result

};