Array.prototype.last = function() {
    //Uses inherited val from parent array so use "this" to get the binded array
    
    return this.length ===0 ?-1:this[this.length-1]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */