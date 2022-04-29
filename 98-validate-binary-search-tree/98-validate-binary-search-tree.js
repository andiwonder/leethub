/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let prev = null; 
  let stack = [];
  while (true) {
    while (root != null) { 
      stack.push(root);
      root = root.left;
    }

    if (stack.length === 0) {
      return true;
    }
        
    let node = stack.pop(); 
    if (prev != null && prev >= node.val ) {
      return false;
    }

    prev = node.val; 
    root = node.right; 
  }
};