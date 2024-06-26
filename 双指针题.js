// 三数之和（对撞指针）
function threeNum(nums) {
  //先排序
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      //重复的跳过
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        //重复的跳过
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}

// 零移动（快慢指针）
function zeroMove(nums){
	let left = 0
	for(let right = 0; right<nums.length;right++){
		if(nums[right] != 0){
			if(left != right){
				[nums[left],nums[right]] = [nums[right],nums[left]]
        left++
			}
		}
	}
}

function moveZerosToEnd(nums){
  let pos = 0
  for(let i = 0; i < nums.length; i++){
    if(nums[i]!=0){
      nums[pos++] = nums[i]
    }
  }

  for(let i = pos;i<nums.length;i++){
    nums[i] = 0
  }
}

// 合并两个有序数组（双指针 从后往前）
function mergeNums(nums1, nums2) {
  let n = nums1.length - 1;
  let m = nums2.length - 1;
  let k = m + n - 1;

  let arr = new Array(k);
  
  while (m >= 0 && n >= 0) {
    if (nums1[n] > nums2[m]) {
      arr[k--] = nums1[n--];
    } else {
      arr[k--] = nums2[m--];
    }
  }
}

// 字符串相加（分离双指针）
function addStrings(str1,str2){
	let result = []
	let carry = 0
	let i = str1.length - 1
	let j = str2.length - 1

	while(i > 0  ||  j > 0 || carry>0){
		let sum = carry
		if(i>=0) {
      sum += parseInt(str1.charAt(i))
      i--
    }
		if(j>=0){
      sum += parseInt(str2.charAt(j))
      j--
    }

		result.unshift(sum%10) //存个位
		carry = Math.floor(sum/10) //计算进位
	}
	return result.join("")
}

// 接雨水（对撞指针）
function trap(arr){
  let left = 0
  let right = arr.length - 1
  let leftMax = 0
  let rightMax = 0
  let result = 0
  while(left < right){
    if(arr[left] < arr[right]){
      if(arr[left] > leftMax){
        leftMax = arr[left]
      }else{
        result += leftMax - arr[left]
      }

      left++
    }else{
      if(arr[right] > rightMax){
        rightMax = arr[right]
      }else{
        result += rightMax - arr[right]
      }

      right--
    }
  }
}
