function linearSearch(arr, value) {
  //check for edge cases i.e array with 0 length or null value.

  // loop over the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the value at the current index is equal to the passed in value if yes return the index
    if (arr[i] === value) return i;
  }

  // If we make out of the loop that means the value is not in the array so return -1
  return -1;
}

console.log(linearSearch([5, 8, 9, 7, 2, 3, 4, 6, 45], 4)); // Expected Output 6

console.log(linearSearch([45487, 2131546, 45998, 3225478, 11112233], 11112233)); // Expected Output 4

console.log(linearSearch([5, 8, 9, 7, 2, 3, 4, 6, 45], 220)); // Expected Output -1
