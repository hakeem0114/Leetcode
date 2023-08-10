/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) { 

    //Edge Cases
    if(!obj)return false
    if(obj[0])return obj

    
    function arrCheck(obj){
        //Check if arr
        if(Array.isArray(obj)){
            for(let i=0;i<obj.length;i++){
                let el = obj[i]

                //Handled nested arr
                if(Array.isArray(obj)){
                    arrCheck(el,i)
                }

                //Delete falsy value
                if(!Boolean(el)){
                    obj.splice(i,1)
                    i-- //Update i to reflect new array length
                }

                //Handled nested obj
                if(typeof obj === 'object'){
                    objCheck(el)
                }
            }
        }      
    }

    function objCheck(obj){
        //Check if obj
        if(typeof obj === 'object'){
            for(let i in obj){

                //Handled nested arr
                if(Array.isArray(obj)){
                    arrCheck(obj[i],i)
                }

                //Handled nested obj
                if(typeof obj === 'object'){
                    objCheck(obj)
                }

                //Delete falsy key:value pairs
                if(!Boolean(obj[i])){
                    delete obj[i]
                }
            }
        }
    }

    arrCheck(obj)
//    objCheck(obj)

    return obj
};