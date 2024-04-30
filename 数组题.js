//轮转数组 将数组中的元素向右移动k步
function rotate(nums, k) {
  const arr = new Array(k);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    arr[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; i++) {
    nums[i] = arr[i];
  }
}

//螺旋矩阵（顺时针读取二维数组元素）
function spiralOrder(matrix) {
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let res = [];
  while (left <= right && top <= bottom) {
    // 二维数组第一列
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }
}

//旋转图像(二维矩阵旋转90度)
function roteta(matrix){
	
}
