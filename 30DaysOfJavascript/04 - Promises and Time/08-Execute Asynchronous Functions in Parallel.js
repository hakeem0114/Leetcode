/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return await new Promise((resolve, reject)=>{
 
        //edge case 1: empty arr
        if(functions.length === 0) return resolve([])
 
        //Not empty: 
         let functionCount = 0
         const resolveArr = []
         
         //Bug solved: store value immediately at corresponding index in order of being seen
        functions.map((func, index)=>{
             //If any fails, it rejects
             func()
                 .then((fun)=>{
                    // resolveArr.push(fun)
                    resolveArr[index] = fun //fixes bug
                     functionCount++
 
                     //all promises resolved 
                     if(functions.length === functionCount){
                         resolve(resolveArr)
                     }
                 })
                 .catch((err)=>{
                     reject(err)
                 })
         })
     })
 };
 
 /**
  * const promise = promiseAll([() => new Promise(res => res(42))])
  * promise.then(console.log); // [42]
  */