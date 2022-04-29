/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    let hasDups = false;
    let memo = {};

    for(let i = 0; i < nums.length; i++) {
        if(memo[nums[i]] === undefined) {
            memo[nums[i]] = 1;
        } else {            
            hasDups = true;
            break;
        }
    }

    return hasDups;
};