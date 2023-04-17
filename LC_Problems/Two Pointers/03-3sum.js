/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 //O(nlogn)xO(n^2) => O(n^2)
 var threeSum = function(nums) {
    //Edge Case 1
    if(nums.length ===0) return []

    //Edge Case 2: array is not empty
    let answer = [] //since output = [[-1,-1,2],[-1,0,1]]
    
    //Sort nums
    nums.sort((a,b)=>a-b) //Duplicates will the next to each other

    //Use i for first loop to store 1st num
    for(let i = 0; i<nums.length -2;i++){//Do not include last (2) nums
                                        //Will be for last (2) nums of triplet
        
        //Stop duplicate [i] from occuring: Use only 1 duplicate by skipping the other
        if(i>0 && nums[i]=== nums[i-1]) continue; //nums[i] comes after nums[i-1] so continue


        //Check 2nd & 3rd nums using (2) pointers technique 
        let j = i+1 //j = next num after i per iteration
        let k = nums.length -1 //Last nums in array

        while(j<k){ //While j pointer loops to the k to check for 3sum
          let sum = nums[i]+nums[j]+nums[k] 

                if(sum === 0){//If 3sum is found
                    answer.push([nums[i],nums[j],nums[k]]) //Push new array for each 3sum found

                        //Stop duplicate [j] & [k] from occuring before exiting while loop
                        while(nums[j]=== nums[j+1]){
                            j++ //Increment to next j & check again for next iteration
                        }
                        while(nums[k]=== nums[k+1]){
                            k-- //Decrement last num & check again for next iteration
                        }

                        //Move pointers if no duplicate        
                        j++ //Increment j pointer to right for next iteration
                        k-- //Decrement last pointer to left for next iteration

                }else if(sum<0){ //2 pointer technique to increment left pointer if sum<0
                    j++
                }else{
                    k--
                }

        }
    }
    return answer

};