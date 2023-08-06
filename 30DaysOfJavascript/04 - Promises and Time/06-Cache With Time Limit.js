
//Main trick was the storing the timeout of each ID & overwrite it

var TimeLimitedCache = function() {
    const cache = {}

    return{
        set:function(key, value, duration){     
            let existingKey = cache[key]
            
                //Remove key after duration (expiry)
                const timeoutID = setTimeout(()=>{
                       delete cache[key] //delete key property
                }, duration)

                //add key & save its duration
                cache[key] = {
                    value,
                    timeoutID
                }

                if(existingKey){
                    //Edge case: everytime we overwrite a key, re-render its duration
                    clearTimeout(existingKey.timeoutID)
                    return true
                }else{
                    return false
                }

        },
        get: function(key){
            console.log(cache)
            //Unexpired
            if(cache[key]){
                return cache[key].value
            }else{
                return -1
            }
            

        },
        count:function(){
            return Object.keys(cache).length
        }
    }
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */