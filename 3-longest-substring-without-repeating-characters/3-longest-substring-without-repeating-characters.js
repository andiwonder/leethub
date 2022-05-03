var lengthOfLongestSubstring = function(s) {
    let chars = {}, left = 0, right = 0, result = 0;
    
    while(right < s.length) {
        let rightChar = s[right];
        if(chars[rightChar] === undefined) {
            chars[rightChar] = 1;
        } else {
            chars[rightChar]++;
        }
        
        while(chars[rightChar] > 1) {
            let leftChar = s[left];
            chars[leftChar]--;
            left++;
        }
        
        result = Math.max(result, right - left + 1);
        right++;
    }
    
    return result;
};