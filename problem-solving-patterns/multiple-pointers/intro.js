/*

=====================================================================================================
MULTIPLE POINTERS PATTEREN FOR SOLVIG PROBLEMS (Time complexity of O(n) and Space complexity of O(1)) 
=====================================================================================================

Pattern
--------
This pattern involves creating Pointers of values (a pair of values) that correspond to a certain index or position, and these pointers will move towards the Begining, Middle or Ending Index depending upon a certain condition (which usally involves a pair of values meeting that condition). This pattern is very efficient for solving problems with minimal space complexity.
Inputs for this Pattern can be 'Arrays' 'Strings' and 'Linked Lists' (both singely linked and doublely linked)


Problem
--------
Write a function called sumZero which accpets a sorted array of integers. The function should find the frist pair of values where the sum is equal to 0, it should then return those pair values in an array. If there is no such pair whose sum is 0 the function should return undefined.


Examples
--------

sumZero([ -3, -2, -1, 0, 1, 2, 3 ]);  should return [ -3, 3 ]

sumZero([ -2, 0, 1, 3 ]);  should return undefined.

sumZero([ 1, 2, 3 ]);  should return undefined.

*/

const sumZero = (sortedArr) => {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    let sum = sortedArr[left] + sortedArr[right];
    if (sum === 0) {
      return [sortedArr[left], sortedArr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
