/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const reverse = (s, left, right) => {
        if(left > right) return;
        let temp = s[left];
        s[left] = s[right]
        s[right] = temp;
        reverse(s, left + 1, right - 1);
      }
    
    reverse(s, 0, s.length -1);
};