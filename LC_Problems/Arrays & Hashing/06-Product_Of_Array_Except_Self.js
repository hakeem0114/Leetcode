/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // O(n)= update 1 array
 var productExceptSelf = function(nums) {
    let result = [];

    let start1=1; //Initial product placeholder
    //Prefix of nums: Product of each element from left to right
    for(let i=0; i<nums.length;i++){
        result.push(start1);
        start1 *= nums[i];
    }

    let start2=1;
    //Suffix of nums: Product of each element from right to left
    for(let i=nums.length-1; i>=0;i--){

        result[i] *= start2
        start2 *= nums[i];
    }

    return result;
};



/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // O(n^2)
 var productExceptSelf = function(nums) {
    //nums = [1,2,3,4]
    //answer =[]
        //Each value in the answer arr should be a prouct of each arr aside for nums[i]
    //Soln: get product of each element before & after it, then both arrays together to get ans=[]

    let forwardArr  = []
    let start = 1 //Since we are multiplying, 1 should be the start product left of 1st index

    //forwardArr to get product of each value in 1st arr 
    for(let i=0; i<nums.length;i++){
        forwardArr.push(start) //== [1, 1, 2, 6]

        //For each nums[i], product of each element before & after 
        start = start* nums[i] //Update start for next iteration & push to end of = [ 1, 1*1, 2*1, 2*3] 
    }
    console.log(forwardArr)
    

    //reverseArr
    let revserseArr = []
    let start2 = 1 // Placeholder for rightmost(last) element in arr 
    for(let i=nums.length -1; i>=0;i--){ //Loop in reverse
        revserseArr.unshift(start2 * forwardArr[i]) //= frontArr x reverseArr = answer =>[24, 24, 12, 4] 
        start2 = start2* nums[i] //Update start for next iteration & unshift to start of array 
                       
    }
    console.log(revserseArr)

    return revserseArr
};