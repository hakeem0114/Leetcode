/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

 //Cancels previous calls if intial duration has not passed
 var debounce = function(fn, t) {
    let timeoutID;
    return function(...args) {
        //By clearing each function before each call, it debounces
        clearTimeout(timeoutID) //clearTimeout can still work on undefined so this works on initialization

        timeoutID = setTimeout(()=>{
            fn(...args) //Call function once
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */