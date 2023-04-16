/*
Input: ["lint","code","love","you"]
Output: ["lint","code","love","you"]
Explanation:
One possible encode method is: "lint:;code:;love:;you"


Input: ["we", "say", ":", "yes"]
Output: ["we", "say", ":", "yes"]
Explanation:
One possible encode method is: "we:;say:;:::;yes"
*/

//Encode string = join string & passed into decode function
var encode=  function(strs){
    //If string is empty
    if(!strs.length){
        return null
    }else{
        //encode string
        return strs.join("-encodeStr-") //Unique encode concatenate function
    }
};


//Decode single string to a list of strings
//=> Convert back to array of strings
//Received encode as: var decode = function (encode(strs))

var decode=  function(s){
        //If string is empty
        if(s === null){
            return []
        }else{
            //decode string
            return s.split("-encodeStr-")
        }
};