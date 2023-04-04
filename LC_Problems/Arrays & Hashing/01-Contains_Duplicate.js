//O(1): .set()

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    //.set returns unique values only
    const newArray = new Set([...nums])
  
    //Return truthy if the size of the new array w/o duplicates != old array
    return newArray.size != nums.length
  
  };

//O(n): Hashmap + for loop
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

  const Hashmap = new Map()

  for(let i=0; i< nums.length;i++){
    
    //Add key/index: value to hashMap
    Hashmap.set(i, nums[i])

    //Before the next iteration, check if there is already a duplicate value
    if(Hashmap.has(nums[i])){return true}

  }return false

};

//O(nlogn): Bubble sort + for loop
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    //Sort: a-b = ascending order
    nums.sort((a,b)=> a-b) //log n
  
    //After sort, duplicate will be the adjacent number 
    for(let i=0; i< nums.length;i++){ //O(n)
      return (nums[i]=== nums[i+1])
    }return false
  
  };

//O(n^2): nested for loop

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    for(let i=0; i< nums.length;i++){
      for(let j=i+1; j< nums.length;j++){
          if(nums[i]===nums[j]){return true}
      }
    }return false
  
  };