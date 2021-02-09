function maxSubarraySum(arr, num) {
  // If the passed in Array is shorter than num;
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // Expected Output 10

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // Expected Output 17.

console.log(maxSubarraySum([4, 2, 1, 6], 1)); // Expected Output 6.

console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // Expected Output 13.

console.log(maxSubarraySum([], 4)); // Expected Output null.
