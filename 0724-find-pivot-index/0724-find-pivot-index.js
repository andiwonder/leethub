/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = [];
    let rightSum = [];
  
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
      sum += nums[i];
      leftSum.push(sum);
    }
  
    sum = 0;
    for(let i = nums.length - 1; i >= 0; i--) {
      sum += nums[i];
      rightSum.unshift(sum);
    }
  
    for(let i = 0; i < nums.length; i++) {
      if (leftSum[i] === rightSum[i]) {
        return i;
      }
    }
  
    return -1;
};