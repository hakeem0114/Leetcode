/**
 * @param {number[]} height
 * @return {number}
 */

 // O(n)
 var maxArea = function(height) {
    //y-axis: height
    //x-axis: width or amount
    //Use 2 pointers:
        /*
            maxWater = 0
                while(left<right){ //Loop untill left & right pointers meet
                    left = i
                    right = height.length -1 //Last num

                    //Find area (Use minHeight since water will overflow there)
                    minHeight = Math.min(left-Height, right-Height)
                    area = h*w = (minHeight)*[x2-x1]  

                    //Find max amount of water per iteration
                    maxWater = Math.max(maxWater, area)

                    left++ //Move left to next num
                    right-- //Move right pointer back 1 num for next iteration

                }
            return maxWater
            */
    
    //solution:

              let maxWater = 0
              for(let i=0; i<height.length;i++){

                    //Initial values: x1,y1
                    let left = i
                    let leftHeight = height[left]

                    //x2,y2
                     let right = height.length-1 
                     let rightHeight = height[right]
                    
                    

                    while(left<right){ //only iterates through height[i] once & input size decreases per iteration so its amortized
                    
                        //Find area (Use minHeight since water will overflow there)
                        let minHeight = Math.min(leftHeight, rightHeight)
                        let area = (minHeight)*[right-left]  

                        //Find max amount of water per iteration
                        maxWater = Math.max(maxWater, area)

                        //Decrement/Increment pointer based on keeping the
                        //greatest height per iteration & checking its area
                        //Why? The greater the left&right heights, the higher the area

                        if(leftHeight <= rightHeight){
                            left++ //To find a larger leftHeight
                        }else{
                            right++ 
                        }
                 }
              }
            return maxWater
    
};