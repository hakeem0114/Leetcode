/**
 * @param {Object | Array} obj
 * @return {boolean}
 */

//t: O(1) since it does loop over anything if its empty within the for..in loop,
//s: O(1) since nothing is added to the call stack
var isEmpty = function(obj) {
    //Can only loop over keys/properties on objects in js using for..in NOT for..of
  for(let key in obj){
      //If there is a key in the object, 
      return false //it return false immediately
  }
  //If there are no keys, it loop through nothing, ends for..in loop & return true(isEmpty) 
  return true
};

// //O(n) since JSOn.stringify traverseres over each json key:value, t: O(n) since JSON.stringify creates a new string
var isEmpty = function(obj) {
    //.length works on javascript array not objects
    //so, JSON.stringify it & apply .length
        //The length will include the 2 curly braces { } so be mindful
  return  JSON.stringify(obj).length <= 2
};

//S:O(n) iterates over each key:value pair to return the array , t: O(n) returns a new array of keys in object
var isEmpty = function(obj) {
  return  Object.keys(obj).length === 0
};