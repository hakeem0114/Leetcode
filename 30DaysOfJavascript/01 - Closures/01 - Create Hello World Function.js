var createHelloWorld = function(...args) {
    return function(...args) {
        return 'Hello World'
    }
};
