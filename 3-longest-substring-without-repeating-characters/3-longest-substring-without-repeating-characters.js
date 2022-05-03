var lengthOfLongestSubstring = function(s) {
  if(!s.length) return 0;
  
  let result = 1, index = 0, set = new Set();
  
  while (index < s.length) {
    for(let k = index; k < s.length; k++) {
      if(!set.has(s[k])) {
        set.add(s[k]);
      } else {
        result = Math.max(set.size, result);
        set.clear();
        break;
      };
    }
    if(result === s.length) index = s.length-1;
    index++;
  }
  
  return result;  
};