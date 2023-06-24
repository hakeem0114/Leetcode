/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    //Brute Force: O(n^2)

    //1 if next day is warmer, #count if cold for multiple days till warm, 0 if always 
        // Therefore, create an array with zeroes'0' with the same length as tempeatures arr
        // Update 0 to 1 or count# if different
    const answer = new Array(temperatures.length).fill(0)

    for (let i=0; i<temperatures.length;i++){
        
        let currentDayTemp = temperatures[i]

        for (let j=i+1; j<temperatures.length;j++){
            
            let nextDayTemp = temperatures[j]

            if(nextDayTemp > currentDayTemp){
                //Update 0 to 1 or count in answer array
                answer[i] = j-i  

                break; //Exit the j loop & restart with a new i iteration
            }

        }
    }

    return answer
};

/*
1st iteration: i=0,j=1: currentDayTemp = 73 < nextDayTemp = 74
answer= 1-0 = 1 

2nd iteration: i=1,j=2: currentDayTemp = 74 < nextDayTemp = 75
answer= 2-1 = 1 

3rd iteration: i=2,j=3: currentDayTemp = 75 > nextDayTemp = 71
skips updating till =>  i=2,j=6: currentDayTemp = 75 > nextDayTemp = 76
***Found +> answer= 6-2 = 4

4th iteration: i=3,j=4: currentDayTemp = 71 > nextDayTemp = 69
skips updating till =>  i=3,j=5: currentDayTemp = 71 > nextDayTemp = 72
***Found +> answer= 5-3 = 2

*/