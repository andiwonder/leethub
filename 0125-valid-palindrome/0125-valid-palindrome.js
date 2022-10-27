/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let santizied_str = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    let output = true;
    for(let i = 0; i < santizied_str.length; i++) {
      let reverse_index = (santizied_str.length - 1) - i;
      if (santizied_str[i] !== santizied_str[reverse_index]) {
        output = false;
        break;
      }
    }
    return output;
};