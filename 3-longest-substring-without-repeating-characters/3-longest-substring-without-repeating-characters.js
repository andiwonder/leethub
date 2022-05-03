var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
    let curr = 0;
    let hash = {}; 
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        let char = s[i];
        if(hash[char] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[char], curr + 1);
        }
        max_len = Math.max(max_len, curr);
        hash[char] = i; //save the index
    }
    return max_len;
};