const same = (arr1, arr2) => {
  // Return false if both arrays are not of the same length
  if (arr1.length !== arr2.length) return false;

  // Initialize 2 empty objects which will collect all the values and their frequncy from our input array.

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Loop over each array and collect the value in our frequency counters.

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // loop over each frequncy counte to check if both of them have the same squared values with same frequency if not return false.

  // loop over keys of frequencyCounter1
  for (const key in frequencyCounter1) {
    // Check if key of frequencyCounter 1  power of 2  is present in frequencyCounter2 if not return false.
    if (!(key ** 2 in frequencyCounter2)) return false;
    // Chech the frequency (number of times each value appeard in both objects) is same if not return false.
    else if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  // return true if both of them have the same squared values with same frequency(number of occurences ).

  return true;
};

console.log(same([1, 2, 3], [9, 1, 4])); // Expected Output true
console.log(same([1, 2, 3], [9, 1])); // Expected Output false
console.log(same([1, 2, 1], [4, 1, 4])); // Expected Output false
