function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (value === arr[middle]) {
      return middle;
    } else if (value > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 4, 6, 9, 11, 12, 15, 16, 17, 18, 19], 15)); // Expected Output 7
console.log(binarySearch([1, 3, 4, 6, 9, 11, 12, 15, 16, 17, 18, 19], 16)); // Expected Output 8
console.log(binarySearch([1, 3, 6, 7, 10, 18, 23, 84, 96, 101, 110, 120], 120)); // Expected Output 11
console.log(binarySearch([1, 3, 6, 7, 10, 18, 23, 84, 96, 101, 110, 120], 1)); // Expected Output 0
console.log(binarySearch([1, 3, 6, 7, 10, 18, 23, 84, 96, 101, 110, 120], 500)); // Expected Output -1
