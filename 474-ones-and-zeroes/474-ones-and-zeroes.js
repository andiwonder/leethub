/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function countzerosandones(str) {
    let zeros = 0, ones = 0;
    for(let char of str) {
        char === '0' ? zeros++ : ones++;
    }
    return [zeros, ones];
}

var findMaxForm = function(strs, m, n) {
  const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(0));
    for(let str of strs) {
        let [zeros, ones] = countzerosandones(str);
        for(let j = m; j >= zeros; j --) {
            for(let k = n; k >= ones; k--) {
                dp[j][k] = Math.max(
                    1 + dp[j - zeros][k - ones], 
                    dp[j][k]
                )
            }
        }        
    }
    return dp[m][n];
};