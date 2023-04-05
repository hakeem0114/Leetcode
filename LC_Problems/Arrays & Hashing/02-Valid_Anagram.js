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
 
 // Time: O(n)
 