var lengthOfLongestSubstring = function(s) {
    let map = {}, result = 0;
    
    for(let j = 0, i = 0; j < s.length; j++) {
        let currChar = s[j]; 
        if(map[currChar] !== undefined) {
            i = Math.max(map[currChar], i);
        }
        result = Math.max(result, j - i + 1);
        map[s[j]] = j + 1;
    }
    
    return result;
};

