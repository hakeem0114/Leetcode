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