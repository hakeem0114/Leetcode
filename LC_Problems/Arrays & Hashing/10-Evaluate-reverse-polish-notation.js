/**
 * @param {string[]} tokens
 * @return {number}
 */

 //T:O(n)
 //S:O(n)
 var evalRPN = function(tokens) {
    //I: '+', '-', '*','/' using reverse polish notation: 2,5,+ => 2+5=10
    //Reverse polish works on immediate past 2 integers
    //Because of how it works, the first 2 num seem to always be an integer
        //No such thing as 5+ or 28-.

    let integerStack = []
    let newNum = 0

    //C:Conditions
    for(let i =0; i<tokens.length; i++){
        

        //Operand Conditions
        if(tokens[i] ==='+'){
            //Pop off the last 2 integers in stack & use operand
            let curr = integerStack.pop()
            let prev = integerStack.pop()

            //Update arithmetic answer
            newNum = prev + curr

            //Push new answer in stack so you can use it as a prev in next iteration
            integerStack.push(newNum)
        }
        if(tokens[i] ==='-'){
            let curr = integerStack.pop()
            let prev = integerStack.pop()

            newNum = prev - curr

            integerStack.push(newNum)
        }
        if(tokens[i] ==='*'){
            let curr = integerStack.pop()
            let prev = integerStack.pop()

            newNum = prev * curr

            integerStack.push(newNum)
        }
        if(tokens[i] ==='/'){ //Truncate to zero if division = Math.trunc() -> down to zero
            let curr = integerStack.pop()
            let prev = integerStack.pop()

            newNum = Math.trunc(prev / curr)

            integerStack.push(newNum)
        }


        //Integer validation for stack
        let el = tokens[i]
        if(el === "+" || el ===  '-' || el ===  '*' || el ===  '/' ){
            // to fix ' !== ' leetcode issue (not working for some reason)
        }else{
            integerStack.push(Number(el)) 
        }
    
    } 

    //Outputs: integerStack will be at the top of stack
    return  integerStack.pop()

};