/**
 * @param {string} s
 * @return {number}
 */

//O(n)
var lengthOfLongestSubstring = function(s) {
    //Longest/Min => Sliding window

    //Contstraints => No repeating adjacent char = substring

    let longestSub = 0;
    let set = new Set()

    //Sliding Windows pointer
    let left = 0
    let right =0

    //Loop through each/some elements based on nother value => while loop, not a for loop
    while(right<s.length){

        let currentChar = s[right]

        //New Char in set
        if(!set.has(currentChar)){
            set.add(currentChar)

            //Update longestSub count based on added substring in set
            longestSub = Math.max(longestSub, set.size)

            //Increment right pointer for next iteration
            right++
        }else{
            //Exising char in set => Repeating char

            set.delete(s[left]) //Delete char at start of set in order to start a new subtring in next iteration

            //Increment left pointer for next iteration
            left++            
        }
    }
    return longestSub
};