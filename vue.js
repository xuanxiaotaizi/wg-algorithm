//vue dom diff 最长递增子序列
//动态规划
// dp[i] 代表arr[i]为结尾的最长子序列长度，初始值为1
// 对于arr[i]所在的序列，只需要找出i前面的数组结尾小于arr[i]的子序列的值
// 需要计算出所有的dp[i] 获取最大的那个即可
// 其实可以这么理解：比如[2,5,7,3],数组索引3到索引0，比作从D(7)、C(3)、B(5)、A(2)的行程规划，要求只能从大的数到小的数，走的步数越多越好；比如C不能直达到B，因为C比B小；
// 所以我们要算出D到A的最多步数，可以先算出C到A的最多步数，再算出D到他们的步数，D和A、B、C每一项进行比较，D大于它就在之前的基础上+1，算出D分别到A、B、C的步数，取最大值

function lis(arr){
  const dp = new Array(arr.length).fill(1); 
  for(let i =0;i<arr.length;i++){
    for(let j = 0;j<i;j++){
      if(arr[i] > arr[j]){
        dp[i] = Math.max(dp[i],dp[j]+1)
      }
    }
  }
  return Math.max(dp)
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