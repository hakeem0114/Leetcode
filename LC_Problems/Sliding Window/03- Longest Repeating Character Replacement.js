/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

 //O(n)
 var characterReplacement = function(s, k) {

    /*
        let map ={}

        //Longest = sliding window
        let longestSubstring = 0
        let left = 0
        let right = 0

        

        while(right< s.length){
            let rightChar = s[right]
            

            //freqMap 
            freqMap[right] = freqMap[right] +1 || 1 //If freqMap[right] is true, increment else, freq=1

            //Check if you have reached a non-repeating substring
            let lengthCurrentSubstring  = (right - left) +1 

            let mostFreqChar = Math.max(mostFreqChar, freqMap[rightChar] ) //Max freq from map

            newCharAmount = mostFreqChar -lengthCurrentSubstring 

            while ( newCharAmount > k){  //Found new char, move sliding window to cover the different cha
                

                let leftChar = s[right]//Shift sliding window to the right (would have deleted the 1st char if it was a set) 

                freqMap[leftChar]-- //Shift window to right = decrement freq count of current substring

                right++
                
            }


            longestSubstring = Math.max(longestSubstring,lengthCurrentSubstring  )
        }
        
    return longest

    */

    let map = {}

    let topFrequency = 0
    let longestSubstring = 0

    //Sliding window
    let left = 0
    let right = 0 

    while(right< s.length){
        let rightChar = s[right]

        //FreqMap using sliding window
        map[rightChar] = map[rightChar]+1 || 1 
        //If map[rightChar] is true (in freqMap), frequency count
        //If map[rightChar] is not in map, frequency=1

        //Get topFrequency per iteration using FreqMap
         topFrequency  = Math.max(topFrequency, map[rightChar] )

        let lengthOfSubstring = right-left+1 

        //Check how many times the rightChar can be changed to leftChar to get longestSubtring
        while( (lengthOfSubstring - topFrequency) > k){

            //Update left pointer
            let leftChar = s[left]

            map[leftChar]--

            left++
        }

    longestSubstring = Math.max(longestSubstring,lengthOfSubstring) 

    //Update right pointer for next iteration
    right++
    }
    return longest    
};

    /*
        Longest string/char => sliding window

        //Assume there will only be 2 types of letters

         left=0 , right = 0 , freqMap = {}
         maxFreqChar = 0  //Stores the most freq character in map
         longestSubstring = 0 //Return this

         while(left<s.length)

            //Create freqMap
            if(! freqMap[ s[right] ]){
                freqMap[ s[right] ] = 1
            }else{
                freqMap[ s[right] ]++ //Increment count
            }

            //If you change the others characters "k" times to match the other char, 
            find the longest substring of the same letter

            //Update maxFreqChar
             maxFreqChar++
             
             longestSubstring = Math.max(longestSubstring,maxFreqChar)

            //If a char not in the map & appears < || = k times, change it to match char in map
            leastFreq
            if( freqMap[left] != freqMap[right] ){
                minFreqChar = ((right-left)+1) - maxFreqChar                

                if(minFreqChar <= k){
                    longest = ((right-left)+1)
                }else{
                    //Find a new longestSubstring

                    freqMap[ s[left] ]--
                    left++
                }

                
            }
            



    */