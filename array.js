/*
 * @Author: wanggang(wanggang220713@credithc.com)
 * @Date: 2023-02-25 14:16:49
 * @LastEditors: wanggang
 * @LastEditTime: 2024-02-28 11:37:37
 * @Description: 
 */

//数组题

//两数之和 空间换时间/两数和的转为两数差 O(n)
function twoSum(nums,target){
  const diff = {}
  const len = nums.length
  for (let i = 0; i < len; i++){
    if(diff[target-nums[i]]){
      return [diff[target-nums[i]],i]
    }
    diff[nums[i]] = i
  }
}

/**
 * @Description: 三数之和（双指针）
 * @param {*} nums
 * @param {*} target
 * @return {*}
 * @author: wanggang(wanggang220713@credithc.com)
 */
function threeSum(nums,target){
  const arr = nums.sort(()=>a-b)

  for(let i = 0;i<arr.length-2;i++){
    
  }
}

/**
 * @Description: 删除数组指定元素 双指针（快慢指针）
 * @param {*} arr
 * @param {*} index
 * @return {*}
 * @author: wanggang(wanggang220713@credithc.com)
 */
function removeArrayItem(arr,val){
  let slow = 0
  let nums = []
  for(let fast =0;fast<arr.length;fast++){ 
    if(val!=arr[fast]){
      nums[slow++] =arr[fast] 
    }
  }
  return slow
}

/**
 * @Description: 合并两个有序数组（双指针）
 * @param {*} nums1
 * @param {*} nums2
 * @return {*}
 * @author: wanggang(wanggang220713@credithc.com)
 */
function merge(nums1,nums2){
  const n = nums2.length
  const m = nums1.length
  for(let i =0;i<n;i++){
    nums1.push(0)
  }
  let i = n-1,j=m-1,k=m+n-1
  while(i>=0&&j>=0){
    if(nums2[i]>nums1[j]){
      nums1[k] = nums2[i]
      k--
      i--
    }else{
      nums1[k] = nums1[j]
      k--
      j--
    }
  }
  while(i>0){
    nums1[k] = nums2[i]
    i--
    k--
  }
  
}
//删除有序数组中的重复数字(快慢指针)
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

//翻转字符串
function reverseStr(str){
  return str.split('').reverse().join('')
}
//给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串(双指针)。
function vaildPalindrome(str){
  let i = 0
  let j = str.length - 1

  while(i<j && str[i] === str[j]){
    j--
    i++
  }

  if(isPlindrome(i+1,j)){
    return true
  }
  if(isPlindrome(i,j-1)){
    return true
  }

  function isPlindrome(n,m){
    while(n<m){
      if(str[n] != str[m]) return false
      n++
      m--
    }
  }

  return false
}
