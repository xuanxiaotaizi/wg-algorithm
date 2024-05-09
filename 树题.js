//树的前中后遍历
function preOrder(root){
    if(!root) return root;
    const result = []
    result.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
}
//树的层序遍历


// 二叉树的最近公共祖先
function commonAns(root,p,q){
    if(!root || root === p || root === q) return root

    const left = commonAns(root.left,p,q)

    const right = commonAns(root.right,p,q)

    if(left && right) return root
    return left?left:right

}

// 二叉树的最大深度
function maxDepth(root){
    if(!root) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
}

// 翻转二叉树
function revereTree(root){
    if(!root) return root
    [root.left,root.right] = [root.result,root.left]

    revereTree(root.left)
    revereTree(root.right)
    return root
}

// 平衡二叉树

// 验证二叉搜索树
function isVaild(){
    if(!root) return true
    if(root.left&&root.val<root.left.val) return false
    if(root.right&&root.val>root.right.val) return false
    return isVaild(root.left) && isVaild(root.right)
}
// 路径总和

//二叉树的右视图