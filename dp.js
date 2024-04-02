/*
 * @Author: wanggang(wanggang220713@credithc.com)
 * @Date: 2023-06-07 18:10:42
 * @LastEditors: wanggang
 * @LastEditTime: 2024-02-28 10:39:27
 * @Description: 
 */
/**
 * @Description: 最大子序和
 * 动态规划解析：f(i)代表最大子序列的和，求f(i-1) + nums[i] 和 nums[i]的最大值
 * @param {*} arr
 * @return {*}
 * @author: wanggang(wanggang220713@credithc.com)
 */
function maxSubArray(arr){
  let pre = 0;
  let max = arr[0]
  arr.forEach((n)=>{
    pre = Math.max(pre + n,n)
    let max = Math.max(max,pre)
  })
  return max
}

/**
 * @Description: 最长递增子序列
 * 动态规划：dp[i]代表0-i个元素的最长子序列长度，dp[j]代表0-j个元素的最长子序列长度其中j<i，那么状态转移方程：dp[i] = max(dp[j]) + 1
 * @param {*} arr
 * @return {*}
 * @author: wanggang(wanggang220713@credithc.com)
 */
function maxGrowSubArray(arr){
  const len = arr.length;
  let res = 0
  for(let i = 1; i<len;i++){
    for(let j = 0;j<i;j++){
      if(arr[i]>arr[j]){
        dp[i] = Math.max(arr[i],arr[j]+1)
      }
      if(dp[i]>res){
        result = dp[i]
      }
    }
  }
  return res
}