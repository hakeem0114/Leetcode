//fn() can only be called once so use declarative state like in React useState but a block scope with booleans

//Imperative Way
var once = function(fn) {
    let calledFunction = false
    return function(...args){
        if(calledFunction === true){ 
            return undefined
        }

        calledFunction = true
        return fn(...args)        
    }
};

//Binding Way **IN PROGRESS**
var once = function(fn) {

    return function(...args){
       return fn.bind(this, args)
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
