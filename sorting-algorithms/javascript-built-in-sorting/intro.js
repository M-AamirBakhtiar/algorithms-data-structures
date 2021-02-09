function acendingSort(a, b) {
  return a - b;
}

function decendingSort(a, b) {
  return b - a;
}

const nums = [12, 5, 63, 9, 47, 2, 1, 3, 14, 14];
const nums2 = [12, 5, 63, 9, 47, 2, 1, 3, 14, 14];

console.log(nums.sort(acendingSort));
console.log(nums2.sort(decendingSort));
