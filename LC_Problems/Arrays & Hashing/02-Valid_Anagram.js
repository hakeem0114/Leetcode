/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 //T: O(M+N+M) = O(M+N) ~ O(n)
 //S: O(n) due to creating a map data structure 
 var isAnagram = function(s, t) {

    //Edge Cases
    if(s.length !== t.length)return false



    //Create a freq map of the string 1
    sMap = new Map()
    
    for(let char of s){
        //If in map, increment count
        if(sMap.has(char)){
            let sMapVal = sMap.get(char)
            sMap.set(char, sMapVal+1 ) //sMapVal++ won't work since you need increment before pushing to map 
        }else{
            //new occurence
            sMap.set(char, 1)
        }       
    }

    //If you see an occurence of a string2 key in string1, then decrement
    for(let char of t){
        let sMapVal = sMap.get(char)
        if(sMap.has(char)){
            //Decrement freq     
            sMap.set(char, sMapVal-1 )
            
        }
    }

    //Check if all values in map are zero (valid anagram & cancelled out frequencies)
    for(let[key, value] of sMap){
        if(value !=0)return false
    }return true

};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //Return true if t is an anagram of s
    //Anagram = contains the same string
 
     //string will be lowercase
 
     //str-> split arr -> sort arr -> string 
    const stringS = s.split("").sort().join("") //Returns an alphabetically sorted string
    const stringT = t.split("").sort().join("")
     
     if(stringS == stringT){
         return true
     }return false
 
 };
 
 // Time: O(m*n)
 