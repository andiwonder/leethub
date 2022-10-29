/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let output = [];
    nums.reduce((total, num) => { 
      output.push(total + num);
      return total + num;
    }, 0);
    return output;
};