
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

//LRU算法
//1、缓存提升
//2、超出限额判断
class LRU {
  constructor(limit =  10){
    this.map = new Map();
    this.limit = limit;
  }
  get(key){
    if(this.map.has(key)){
      const temp = this.map.get(key)
      this.map.delete(key)
      this.map.set(key,temp)
    }
  }
  put(key,value){
    if(this.map.has(key)){
      this.map.delete(key)
    }else if(this.map.size > this.limit){
      this.map.delete(this.map.keys().next().value)
    }
    this.map.set(key,value)
  }
}