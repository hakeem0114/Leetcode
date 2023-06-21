/**
 * @param {number} n
 * @return {string[]}
 */

 //T: nth Catalan # = O(4^n / sqrt(n)
 //S: nth Catalan # = O(4^n / sqrt(n) for recurson + O(n) to store sequence in stack
 var generateParenthesis = function(n) {
    /*
        n=2. 
        open = ['(', '(']
        close = [ ')', ')']

        well closed ex: ()() or )()(
    */
    
   //I:
        let wellFormedParentheses = []

   //C:
    //Exit Base Case (found a valid set of wellFormedParentheses): return close.length == n && open.length == n 
    // ()) is invalid since it can never to become a well formed parentheses,=>  open.length > close.length 
        //closing tag can't be first  char. 1st tag has to the 1st char
        //After a set of open & close tags='(',')' , you can't start with a closing tag. 
    // max length of open = n. After, you must add closing tag per recurision till fils to < n => open < n && close < n

    function generateParentheses(open, close, string){

        //Base Case to exit recusion & backtracking
        if(close == n && open == n ){
            wellFormedParentheses.push(string)
            //  console.log(wellFormedParentheses) 
        }

        //Generate open parentheses dfs
        if(open < n){
            generateParentheses(open+1, close, string + '(')
        }

        //Generate close parentheses dfs
        if(open > close){
            generateParentheses(open, close+1, string + ')')
        }
    }
     generateParentheses(0,0,'')

  //O: 
  return wellFormedParentheses

   



};