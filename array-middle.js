//三数之和
/**
 * @Description: 删除有序数组中的重复数字(快慢指针)
 * @param {*} nums
 * @return {*}
 * @author: wanggang(wanggang220713@credithc.com)
 */
function removeRepeatNum(nums){
  let len = nums.length
  let fast = 1
  let slow = 0
  let array = [nums[0]]
  while(fast < len){
    if(nums[fast] != nums[nums[slow]]){
      slow ++ 
      array.push(nums[fast])
    }
    fast ++ 
  }
}

/**
 * @Description: 轮转数组 取模运算
 * @param {*} nums
 * @param {*} k
 * @return {*}
 * [1,2,3,4,5,6,7]
 * [5,6,7,1,2,3,4]
 * @author: wanggang(wanggang220713@credithc.com)
 */
function rotate(nums,k){
  const n = nums.length
  const newArr = new Array(n)

  for(let i = 0; i < n; i++) {
    newArr[(i+k)/n] = nums[i]
  }
  return newArr
}

/**
 * @Description: 最长连续序列
 * 遍历并找出x,x+1,x+2,.....x+n，n+1即为长度，但是暴力算法可以优化，连续序列的第一个数一定没有前驱结点，所以可以排除x-1存在的元素作为起始起点
 * @param {*} nums
 * @return {*}
 * @author: wanggang(wanggang220713@credithc.com)
 */
function longest(nums){
  const set = new Set()
  for(let i of nums){
    set.add(i)
  }
  let longest = 0
  for(let i of nums){
    if(!set.has(i-1)){
      let currentNum = i
      let currentLen = 1
      while(set.has(currentNum + 1)){
        currentNum+=1
        currentLen+=1
      }
      longest = Math.max(longest,currentLen)
    }
  }

  return longest
}


/**
 * @Description: 翻转字符串里的单词 （暂时api选手）
 * 输入：s = "the sky is blue"
 * 输出："blue is sky the"
 * @param {*} str
 * @return {*}
 * @author: wanggang(wanggang220713@credithc.com)
 */
function reverseWords(str){
  return str.trim().split(' ').reverse().join(' ')
}

/**
 * @Description: 最多盛水容器
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49 
 * 双指针解题，其实是计算面积，x轴数值（下标距离）*y轴数值（数组值）指针移动以值小的移动，因为x值是在不断减小的
 * @param {*} nums
 * @return {*}
 * @author: wanggang(wanggang220713@credithc.com)
 */
function maxArea(nums){
  let left = 0;
  let right = nums.length - 1;
  let ans = 0;
  while (left < right) {
    let area = min(nums[left],nums[right]) * (right - left);
    ans = Math,max(ans,area)
    if(nums[left] < nums[right]){
      left ++ 
    }else{
      right ++ 
    }
  }
  return ans
}

/**
 * @Description: 无重复字符的最长子串
 * 滑动窗口问题，子串而不是子序列，子串是连续的，子序列是可以不连续的
 * @param {*} str
 * @return {*}
 * @author: wanggang(wanggang220713@credithc.com)
 */
function longestSubstring(str){
  const set = new Set()
  let n = str.length
  let right = -1
  let ans = 0

  for(let i =0;i<n;i++){
    if(i != 0){
      set.delete(s.charAt(i-1))
    }
    while(right + 1 < n && !set.has(s.charAt(right + 1))) {
      set.add(s.charAt(right + 1))
      ++right
    }
    ans = Math.max(ans, rk - i + 1);
  }
  return ans
} 