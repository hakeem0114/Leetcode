/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) { 

    //Edge Cases
    if(!obj)return false 
   // if(obj[0])return obj

    
    function nestCheck(obj){
        //Check if arr
        if(Array.isArray(obj)){ //ex3
            const newArr = [] //[5,[], [16]]

            //Iterates over arr
            obj.map((el,i)=>{ // [null, 0, 5, [0], [false, 16]], 
                if(el){ //5, [0], [false, 16]
                    newArr.push(nestCheck(el)) //5.push([]), [removes 0].push([5,]), [16].push([5,[], ]) 
                }
            })

            return newArr
        }
        
        //Check if obj
        if(typeof obj === 'object'){//Object with JSON => key:value pairs
            const newObj = {}

            //Iterates over obj
            for(let i in obj){

                //Store key:value pairs with a truthy value
                if(obj[i]){
                    newObj[i] = nestCheck(obj[i])
                }
            }

            return newObj
        }

        //If either, 
        if(obj){
            return obj
        }

    }

    return nestCheck(obj)

};