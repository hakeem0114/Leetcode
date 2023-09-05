/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 //T: O(n^2)
 var groupAnagrams = function(strs) {

    //Edge Case 1: Empty & single word
    if(strs.length < 2){
        return [strs]
    }

    //Format of word Map
        // let wordMap = {
        //     '987':[ ate, ],
        //      '':[]
        // }
    let wordMap = {}


    //Populate wordMap
    for(let word of strs){

        //Count for each lower case alphabet in string value
        //26 letters in alpha
        //Map a->index[0], z->index[25] using ASCII charCodeAt(index) using a freqArrayforAlphaCount
            // charCodeAt('a') =97 so, 
                /* Test: 0-25 (26 alphabets)
                    if char=a, mapped value: charCodeAt(char) - charCodeAt('a') => count =0
                    if char=c, mapped value: charCodeAt(char) - charCodeAt('a') => count =2
                    if char=z, mapped value: charCodeAt(char) - charCodeAt('a') => count =25
                */
        // alphabetCount = [0,0,0,0,0,0,0,0,0...25th index]

        //Create freqArray
        let alphabetCount = new Array(26).fill(0) //Fill arr with 26 empty zeroes (26 alpha)
                                   

        //Update freqArray to show the num of char in each string
        for(let i=0;i<word.length;i++){
            let alphaIndex = word.charCodeAt(i) - 'a'.charCodeAt(0) 
            //array key is better than the ascii sum

            alphabetCount [alphaIndex] += 1   //Increment count of alpha if seen again  
            //console.log(alphaIndex)
           // console.log(alphabetCount)
        }

        //Group anagrams in map with key(alphaCount):value([grouped anagrams])
            
            //console.log(wordMap)
            //Check if anagram is in map
            if(wordMap[alphabetCount]){
                //Add to array group
                wordMap[alphabetCount].push(word)
            }else{
                //New: Make new key:value

                wordMap[alphabetCount] = [word]
            }       
    }

    //Get values from wordMap & return 
    return Object.values(wordMap)   
};



/**
 * @param {string[]} strs
 * @return {string[][]}
 */


 //O(n wlognw)
 var groupAnagrams = function(strs) {

    //Array of strings
    let map = {}

    for(let i=0; i<strs.length;i++){ //O(n)

         //Sort each anagram. Anagrams now become duplicates
         let sortedKey = strs[i].split("").sort().join("")  //O(nlogn)

         //If key of the anagram/duplicate is already in hashMap, push dupicate into hashMap
            if(map[sortedKey]!=undefined){
                map[sortedKey].push(strs[i]) //Push duplicate anagram into array of exisiting anagram
            }else{

                  //Anagram/duplicate does not exist
                  //Add a new array of value(s)to the sorted key in hashMap
                  map[sortedKey] = [ strs[i] ]
                  /*
                    strs = ["eat","tea","tan","ate","nat","bat"]
                    sortedKey = ["eat","eat","tan", "eat","tan","bat"]

                    hashmap ={
                        "eat" = ["eat","eat","tea"],
                        "tan" = ["tan", "nat"],
                        "bat" = ["bat"]
                    }

                    Object.value(hashMap)= ["eat","tea","ate"],["tan","nat"],["bat"]
                  */
            }
    }return Object.values(map)
    
    
};