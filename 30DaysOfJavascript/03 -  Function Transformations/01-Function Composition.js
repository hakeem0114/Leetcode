/**
 * @param {Function[]} functions
 * @return {Function}
 */

//functions = [f(x), g(x), h(x)]
//fn(x) = f(g(h(x))) 
// same as passing in the functions' call into another in reverse

//Imperative 
// var compose = function(functions) {
// 	return function(x) { //x is passed as an arg into prev functions

//         //Call functions in reverse & pass them into the prev
//          for(let func of functions.reverse()){
//             x = func(x) //Aggregates function calls
//          }
//          return x //Return totalAggregate
//     }
// };

//Declarative way with .reduce()
var compose = function(functions) {
	return function(x) { //x is passed as an arg into prev functions
       return functions.reverse().reduce((acc, currFunc)=> currFunc(acc) ,x)
    }
};
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */