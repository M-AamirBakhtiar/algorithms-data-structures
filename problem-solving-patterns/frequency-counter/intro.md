# FREQUENCY COUNTER / HASH TABLE PATTERN FOR PROBLEM SOLVING

## Patteren

This pattern uses objects or sets to collect values / frequencies of values (how many times the same value appears), using this pattern we can avoid nested loops of O(n^2) with array and string inputs.

## Problem

Write a function called "same" which is going to accpet 2 arrays. This function will return "true" if every value in array 1 has its corresponding squared value in array 2. The frequency of values (number of times they appear in each input array) must be the same. The order does not matter.

## Examples

Invoking the function like this

```javascript
same([1, 2, 3], [4, 1, 9]); //should return 'true'

same([1, 2, 3], [1, 9]); //should return 'false'

same([1, 2, 1], [4, 4, 1]); //should return 'false'
```
