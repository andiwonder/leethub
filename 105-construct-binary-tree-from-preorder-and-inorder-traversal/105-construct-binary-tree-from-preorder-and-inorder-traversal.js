/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preorderIndex = 0;
    let inorderIndexMap = {};
    for(let i = 0; i < inorder.length; i++) {
        inorderIndexMap[inorder[i]] = i;
    }
    
    const arrToTree = (preorder, left, right) => {
        if (left > right) return null;
        
        let rootVal = preorder[preorderIndex++];
        let root = new TreeNode(rootVal);
        
        root.left = arrToTree(preorder, left, inorderIndexMap[rootVal] - 1);
        root.right = arrToTree(preorder, inorderIndexMap[rootVal] + 1, right);
        
        return root;
    }
    
    return arrToTree(preorder, 0, preorder.length - 1);
    
};