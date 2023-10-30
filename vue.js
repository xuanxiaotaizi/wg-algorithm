
//vue dom diff 最长递增子序列
//动态规划
// dp[i] 代表arr[i]为结尾的最长子序列长度，初始值为1
// 对于arr[i]的序列，只需要找出i前面的数组结尾小于arr[i]的子序列的值
// 需要计算出所有的dp[i] 获取最大的那个即可
function lis(arr){
  const dp = [1]
  for(let i =0;i<arr.length;i++){
    for(let j = 0;j<i;j++){
      if(arr[i] > arr[j]){
        dp[i] = Math.max(dp[i],dp[j]+1)
      }
    }
  }
}