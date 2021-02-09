/*

============================
BINARY SEARCH ALGORITHM O(log n)
============================

Algorithm
---------
Binary Search is a much faster from of searching in which instead of checking for values one by one and then eliminating one value each time we can effectively eliminate half of the values at a time and make our search steps much shorter and faster.

******** IMPORTANT ********
Binary Search only works on data which is sorted, in terms of numbers it should be from lowest to highest and for alphabets they should be in acending order  'A' -> 'Z', that means in our search function we should accpet only sorted array or strings or sort them in order ourselves first.

Explanation
------------
We have the following sorted Array :-

[ 1, 3, 4, 6, 9, 11, 12, 15, 16, 17, 18, 19]

We would like to look for the value  15. 

First we will create 3 pointers, Frist on the very starting value / index, Second on the very last value / index, and finally one in the very middle of the values. 

Since the index starts at zero for any array and for our example array goes up to 11 we will calculate the middle point using this formula  Math.floor(startPoint + endPoint / 2) = Math.floor( 0 + 11 / 2 ) = 5. 

So our Starting Middle Pointer is index of 5.

[ 1, 3, 4, 6, 9, 11, 12, 15, 16, 17, 18, 19]
 /\              /\                      /\   
 ||              ||                      ||
 ||              ||                      ||
 ||              ||                      ||
 ||              ||                      ||
 ||              ||                      ||
Start           Middle                   End

Now we will check if our Middle is Greater than, Less than or Equal too our search value 15. In our example 15 is greater than 11 so every value after 11 should be eliminated in our search since 15 wont be there.

So our Starting point will become 12 and Ending point will remain the same, and will we again calculate the middle point between the index of 12 and 19. 

Middle = Math.floor( 6 + 11 / 2 ) = 8

[ 1, 3, 4, 6, 9, 11, 12, 15, 16, 17, 18, 19]
                     /\      /\          /\   
                     ||      ||          ||
                     ||      ||          ||
                     ||      ||          ||
                     ||      ||          ||
                     ||      ||          ||
                    Start   Middle       End

We again do our conditional Check for middle and Since its Greater than 15 all the values above 16 can be safely eliminated. So our Start point Remains the same and our End point becomes 16.

[ 1, 3, 4, 6, 9, 11, 12, 15, 16, 17, 18, 19]
                     /\  /\  /\   
                     ||  ||  ||
                     ||  ||  ||
                     ||  ||  ||
                     ||  ||  ||
                     ||  ||  ||
                 Start Middle End


We again do our Conditional Check and see if our Middle is Greater Than, Less Than or Equal to the 15 and now its equal to 15.

So instead of going Through potential 12 Steps for looping through our array and finding 15, We found 15 in just 3 steps. 
*/

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

console.log(binarySearch([1, 3, 4, 6, 9, 11, 12, 15, 16, 17, 18, 19], 15)); // should return 7
console.log(binarySearch([1, 3, 4, 6, 9, 11, 12, 15, 16, 17, 18, 19], 16)); // should return 8
console.log(binarySearch([1, 3, 6, 7, 10, 18, 23, 84, 96, 101, 110, 120], 120)); // should return 11
console.log(binarySearch([1, 3, 6, 7, 10, 18, 23, 84, 96, 101, 110, 120], 1)); // should return 0
console.log(binarySearch([1, 3, 6, 7, 10, 18, 23, 84, 96, 101, 110, 120], 500)); // should return -1
