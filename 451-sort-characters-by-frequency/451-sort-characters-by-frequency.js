/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let result = '';
    let map = {};
    let sortedChar = [];
    
    for(let char of s) {
        if(map[char] === undefined) {
            map[char] = 1;
        } else {
            map[char]++;
        }
    }
    
    for(let key of Object.keys(map)) {
        sortedChar.push([key, map[key]]);
    }
    sortedChar.sort((a,b) => b[1] - a[1]);
    
    for(let [char, count] of sortedChar) {
        result += Array(count).fill(char).join('');
    }
    
    return result;
};