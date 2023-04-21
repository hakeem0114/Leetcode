/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //Edge Case 1: If not profit, return 0
    
    //Finding a net/profit => DP (pointers)
    let currentMin = prices[0]
    let currentMax = 0 //Return this is no profit

    for(let i =0; i<prices.length; i++){ 
        currentMin = Math.min(currentMin, prices[i])

        currentMax = Math.max(currentMax, prices[i]-currentMin)
    }
    return currentMax
};