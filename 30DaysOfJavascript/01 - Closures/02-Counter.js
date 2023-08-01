var createCounter = function(n) {
    return function() {
        return n++ //Return n in iteration 1 & increments in following
    };
};