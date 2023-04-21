/**
 * @param {string} s
 * @return {boolean}
 */

//O(n)
var isValid = function(s) {
    //Since the inputs must be closed in correct order, use a stack
        //Is a valid parenthesis once the stack has pop off all open tags

    let stack = []

    for(let i=0;i<s.length;i++){    

        //Check first, for an opening tag
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            stack.push(s[i]) //If opening, push into stack
        }else{
            //Its a closing tag

            //Check for invalid parentheses & return true if stack is empty
            let openingTag = stack.pop()//.pop() removes openTag off top of stack & return value
            let closingTag = s[i] //Current value in else statement

            if(openingTag == "(" && closingTag !==")" ){ return false}
            if(openingTag == "{" && closingTag !=="}" ) {return false}
            if(openingTag == "[" && closingTag !=="]" ) {return false}

            //If you try to pop off an empty stack, its not a parentheses
            if(openingTag === undefined) return false

            
        }
    }return stack.length === 0 //Return truthy if stack is empty
    
};