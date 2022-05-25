/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartition = function(nums) {
  let memo = {};
  let sum = 0;
  for(let num of nums) sum += num;
  if(sum % 2 === 1) return false;
  let mid = sum/2;

  function findSub(index, target) {        
    if(target < 0) return false;
    if(index === nums.length - 1) {
      if(target === 0) {
        return true;
      }
      return false;
    }
    
    let key = `${index}-${target}`
    if(memo[key] !== undefined) return memo[key];
    
    memo[key] = findSub(index + 1, target) || findSub(index + 1, target - nums[index]);
    return memo[key];
  }

  return findSub(0, mid);
};