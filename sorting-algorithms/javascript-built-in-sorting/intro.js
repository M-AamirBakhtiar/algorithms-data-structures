function acendingSort(a, b) {
  return a - b;
}

function decendingSort(a, b) {
  return b - a;
}

const nums = [12, 5, 63, 9, 47, 2, 1, 3, 14, 14];
const nums2 = [12, 5, 63, 9, 47, 2, 1, 3, 14, 14];

console.log(nums.sort(acendingSort)); // Expected Output [ 1,  2,  3,  5,  9, 12, 14, 14, 47, 63 ]
console.log(nums2.sort(decendingSort)); // Expected Output [ 63, 47, 14, 14, 12, 9,  5,  3,  2,  1 ]
