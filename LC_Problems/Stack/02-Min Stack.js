
var MinStack = function() {
    this.stack = []
    this.minstack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    //If empty stack
    if(!this.stack.length){
        this.stack.push(val)
        this.minstack.push(val)
    }else{
        this.stack.push(val)

        //Push  to minstack by comparing new value & current minVal in minstack
        let currMin = this.minstack[this.minstack.length -1]
        let newMinStack = Math.min( currMin, val ) 
        
        this.minstack.push(newMinStack)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    //If empty stack
    if(!this.stack.length){
        return null
    }else{
        this.stack.pop()

        this.minstack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() { //Get top element
   return this.stack[ this.stack.length -1 ]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minstack[ this.minstack.length -1 ]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */