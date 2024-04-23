/*
 * @Author: wanggang(wanggang220713@credithc.com)
 * @Date: 2023-06-07 18:10:10
 * @LastEditors: wanggang wanggang220713@credithc.com
 * @LastEditTime: 2024-04-23 17:33:44
 * @Description: 
 */
//二叉树的最大深度(递归)
function maxDeepth(root){
  if(!root.left && !root.right){
    return 1
  }
  return Math.max(maxDeepth(root.left),maxDeepth(root.right)) + 1
}
//反转二叉树(递归)
function reverseTree(root){
  if(!root){
    return
  }

  const left = reverseTree(root.left)
  const right = reverseTree(root.right)
  root.left = right
  root.right = left
  return root
}

//合并二叉树
//二叉树转换为链表
//二叉树的前序遍历
function preOrder(root){
  if(!root){
    return []
  }
  return [root.value,...preOrder(root.left),...preOrder(root.right)]
}

//二叉树的层序遍历
function bfs(root){
  const res = []

  if(!root){
    return res
  }

  const queen = []

  queen.push(root)
  
  while(queen.length){
    const level = []
    const node = queen.shift()
    level.push(node.val)
    if(root.left){
      queen.push(root.left)
    }
    if(root.right){
      queen.push(root.right)
    }
    res.push(level)
  }
  return res
}
//二叉树的最近公共祖先 后续遍历回溯查找
function lowestCommonAncestor(root,p,q){
  if(root == q || root == p || root == null) return root
  const left = lowestCommonAncestor(root.left,p,q)
  const right = lowestCommonAncestor(root.right,p,q)
  if(left==null) return right
  if(right==null) return left
  return root
}
//二叉搜索树的最近公共祖先
function lowestCommonAncestor(root,p,q){
  if(root ==p || root==q || root == null) return root
  if(root.val > p && root.val>q) return lowestCommonAncestor(root.left,p,q)
  if(root.val < p && root.val<q) return lowestCommonAncestor(root.right,p,q)
}

//验证二叉搜索树
let g
function verifyBst(root){
  const l = verifyBst(root.left)
  if(pre > root.val) return false
  pre = root.val
  const r = verifyBst(root.right)
  return l && r
}
//将有序数组转换为二叉搜索树
function sortArrayToBst(array){
  const mid = array.length/2
  const root = new TreeNode(array[mid])
  root.left = sortArrayToBst(array.splice(0,mid-1))
  root.right = sortArrayToBst(array.splice(mid+1,length))
  return root
}
//二叉搜索树中的插入操作
