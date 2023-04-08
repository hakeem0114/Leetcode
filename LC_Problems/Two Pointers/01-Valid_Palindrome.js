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