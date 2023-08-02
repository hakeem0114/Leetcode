/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

 //arr.reduce((acc or TotalSum, currSum)=> return acc + currSum, initialSum or initialAcc Value)
 var reduce = function(nums, fn, init) {
    let initial = init
    let curr = init

    if(nums.length === 0){
        return initial
    }else{
        
            //[1,2,3,4]
            //It1
            //initialAccumVal = 100
            //num = 1
            //accum = 100
            //fn = function sum(accum, curr) { return accum + curr * curr; }
            // return 100 + CurrNumfromArr + CurrNumfromArr = 100 + 1*1 = 101

            nums.forEach((num)=>{
                //Update curr
                curr = fn(curr, num)
            })
            return curr
    }
};