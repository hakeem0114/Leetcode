/**
 * @param {Function} fn
 * @return {Array}
 */

 //S: O(n) since Object.values() will not look for all values due memoization
 //T: O(n^2) since it Object.values() creates a new arr of the obj's val which add to the call stack
 Array.prototype.groupBy = function(fn) {

    let arr = this
    let result = {}
    let key
    let value 

    arr.map((obj, index)=>{
            key = fn(arr[index])

            //Check for array or boolean
            if(Array.isArray(arr[0]) || key){
               // console.log('array')

               //Check for duplicates with memoization
               if(result[key]){
                   result[key].push(obj)
               }else{
                    //New
                    result[key] = [obj]
               }
            }else{//Check for object

                //Check for duplicate in object
                if(result[key]){
                    //Duplicate with memoization
                    result[key].push(obj)
                }else{//New
                    if(Number(Object.values(obj)) == key){
                    result[key] = [obj]    
                    }
                }
            }
    })

    return result
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

 /*
//SOMEONE'S ELSE'S ANSWER

Array.prototype.groupBy = function(fn) {
    const grouped = {},length = this.length;
    for(let i=0;i<length;i++){
      const id = fn(this[i]);
      if(grouped[id] === undefined) grouped[id] = [];
      grouped[id].push(this[i]);
    }
    return grouped;
};
 */