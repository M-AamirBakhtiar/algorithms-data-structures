/*

Problem
-------
Write a function called countUniqueValues which accpets a sorted array and counts the unique value in the array. It then returns the number of unique values.

Examples
--------

countUniqueValues([]) // returns 0

countUniqueValues([1,1,1,1,1,1,2]) // returns 2

Explanation
-----------
i starts at 0 and j start at one both of them are compared and if they are equal (meaning not different / unique) j is moved forward

  i
[ 1, 1 ,1 ,1 ,1 ,1 ,2 ]
     j -->

When j does encouter a different Unique value we move i forward i++ and replace the value at that index with the unique value since there is no rule to not alter the original array.

  i
[ 1, 1 ,1 ,1 ,1 ,1 ,2 ]
                    j 

     i
[ 1, 2 ,1 ,1 ,1 ,1 ,2 ]
                    j                   

When the loop is over i will be on the last unique value and since i started at 0 we need to add 1 to i's current position to get the corrent number of unique values. 


countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) returns 7

countUniqueValues([-2,-1,-1,0,1]) returns 4



*/

const countUniqueValues = (arr) => {
  // Check if the array is empty return 0
  if (arr.length === 0) return 0;

  // Define the 1st  pointer
  let i = 0;

  // Define the 2nd pointer which will loop to the length of the array to compare the 2 pointers
  for (let j = 1; j < arr.length; j++) {
    // if we encounter a diffirent value from our first pointer we move our 1st pointer up one point and modify the array
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // Since our index starts at 0 we need to add 1 to our answer to get the correct Number of Unique values.
  return i + 1;
};

console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
