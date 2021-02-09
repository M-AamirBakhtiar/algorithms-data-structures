/*

============================
LINEAR SEARCH ALGORITHM O(n)
============================

Algorithm
---------
Linear Search is most commonly used to loop over an array and find a given value in the array and return either true or the index position of that value. All of the Built in JavaScript array methonds like  find, indexOf, includes use Linear Search. The most important part about linear search is that our array does not have to be sorted for it to work. 

It has an O(n) time complexity since in the worst possible case the value we are looking for is located at the very end of the array and we have to loop over the entire array to find that value.


*/

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

console.log(linearSearch([5, 8, 9, 7, 2, 3, 4, 6, 45], 4)); // should return 6

console.log(linearSearch([45487, 2131546, 45998, 3225478, 11112233], 11112233)); // should return 4

console.log(linearSearch([5, 8, 9, 7, 2, 3, 4, 6, 45], 220)); // should return -1
