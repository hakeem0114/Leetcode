/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    //id = key: value pair

    let joinedArray = {}
    let cache = [...arr1,...arr2]
    let mergedArray 

    //Merge if key exists in muliple objects
    cache.map((obj, i)=>{

        //Get id paramater from each obj to store as key
         let key = obj.id

        //If id with key=id & its value are in the joinedArr
        if(joinedArray[key]){
            //Overwrite: "key value": {updated object}
            joinedArray[key] = {...joinedArray[key],...obj}
        }else{
            //New: "key value": {new object}
            joinedArray[key] = {...obj}
        }
    })
   // console.log(joinedArray)// { '1': { id: 1, x: 1 }, '2': { id: 2, x: 9 }, '3': { id: 3, x: 5 } }
   // console.log(Object.values(joinedArray)) // [ { id: 1, x: 1 }, { id: 2, x: 9 }, { id: 3, x: 5 } ]


    //Remove values from joinedArray object to get the properly mergedArray
    mergedArray = Object.values(joinedArray)
   //console.log(mergedArray)

    //Sort in ascending order based on id
    mergedArray.sort((a,b)=>a.id-b.id)

    return mergedArray

};

//DON'T CONFUSE YOURSELF
/*
arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], 
IS THE SAME AS 
arr1 = [
    {
        "id": 1,
         "x": 1
    },
    {
        "id": 2,
         "x": 9
    }
], 
//so you can use dot.notation or arr1['x'] = 1 on each obj

*/