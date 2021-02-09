# SLIDING WINDOW PATTERN FOR SOLVIG PROBLEMS O(n)

## Pattern

This pattern involves creating a window which can either be an array or a collection of numbers from one position to another. Depending on a certain condition we can add or remove values from this window. Using this we are looking for a subset of data which is continuous in some way.

E.g

```
"hellothere"
```

in the above string we can look for unique vales which come in a sequence so the frist one will be `"hel"` then `"lother"` and finally `"e"`.

## Problem

Write a function called maxSubarraySum which accepts an array on integers and a number of value n. The function should calculate the sum of n consequtive number of elements in the array. And return the Max Sum.

## Examples

```javascript
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // should return 10
```

```
[ 1, 2, 5, 2, 8, 1, 5] // 3
  -  -

[ 1, 2, 5, 2, 8, 1, 5] // 7
     -  -

[ 1, 2, 5, 2, 8, 1, 5] // 7
        -  -

[ 1, 2, 5, 2, 8, 1, 5] // 10
           -  -

[ 1, 2, 5, 2, 8, 1, 5] // 9
              -  -

[ 1, 2, 5, 2, 8, 1, 5] // 6
                 -  -
```

`10` is the Maximum of `2` consequtive values added together so return `10`.

```javascript
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // should return 17.
```

```
[ 1, 2, 5, 2, 8, 1, 5] // 10
  -        -

[ 1, 2, 5, 2, 8, 1, 5] // 17
     -        -

[ 1, 2, 5, 2, 8, 1, 5] // 16
        -        -

[ 1, 2, 5, 2, 8, 1, 5] // 16
           -        -
```

`17` is the Maxium of `4`consequtive values added together so return `17`.
