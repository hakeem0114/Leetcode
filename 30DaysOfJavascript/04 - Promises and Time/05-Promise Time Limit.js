/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

//Aysnc await way
var timeLimit = function(fn, t) {
	return async function(...args) {

        //Which ever finishes first is returned
        return new Promise( async (resolve, reject)=>{

            //Runs timeout & wait for t to run reject()
            setTimeout(()=>{
                reject('Time Limit Exceeded')
            },t)

            //Try to resolve function
            try{
                const res = await fn(...args)
                resolve(res)
            }
            catch(error){
                reject(error)
            }
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */