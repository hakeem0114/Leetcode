/**
 * @param {string} s
 * @return {boolean}
 */

//T:O(n)
//S:O(1)
var isPalindrome = function(s) {

    let palindromeRegex = /[^a-zA-Z0-9]/g //Select non-alphanumeric characters

    //Remove non-alphanumeric characters
    let palindromeArray= s.replace(palindromeRegex,'').toLowerCase()  
    
    //.match return a new string, .replace returns string
    //console.log(palindromeArray)

    if(s.length <=1 || !palindromeArray)return true
   
    //Palindrome is the same forward & back so use:
        //2 pointers
            //From middle to outside & compare pointer values
    
    let left = 0
    let right = palindromeArray.length-1

    //logn
    while(left < right){ //Before it reaches the end of palindrome

        if(palindromeArray[left] === palindromeArray[right] ){
            left++
            right--
        }else{
            return false
        }
    }
    return true
};

/**
 * @param {string} s
 * @return {boolean}
 */

 //O(n)
 var isPalindrome = function(s) {
    let regex = /[^a-zA-Z0-9]/g //Regex to select only letters & numbers
    let palin = s.replace(regex,'').toLowerCase().split("")

    let revPalin = palin.reverse().join()
    let frontPalin = palin.reverse().join() //Re-reverse since .reverse() reverses the original array

    if(frontPalin === revPalin){
        return true
    }else{return false}
};