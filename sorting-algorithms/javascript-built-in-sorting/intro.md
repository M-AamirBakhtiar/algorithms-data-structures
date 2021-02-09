# JavaScript BuiltIn Sorting O(n)

## Algorithm

JavaScript provieds a builtIn `.sort()` method on each Array, if called by passing no arguments the sort will sort all string values alphabetically from 'A' -> 'Z' or numbers in accending order but will cout 11 as 1 so its not very realiable when called with no arguments.

## Explanation

The `.sort()` method can accept a Callback function as an argument a comparator function. This Callback function will be run on all values in the array, using this callback function we are able to control how we want to sort our array.

CallBack itself will take in a pair of values from the array for comparision :-

```javascript
function customSort(a, b) {}
```

This CallBack can return 3 potential values a positve number, a negative number or zero and JavaScript will sort our Array according to which value we return from this function.

If the Returned Value is a Negative Number then JavaScript will know the value "a" should come before value "b" in our array (a is shorter than b that is why we got a -ive number).

```javascript
function customSort(a, b) {
  return a - b; // Our Array will be sorted in a Acending Order.
}
```

If the Returned Value is a Positive Number then JavaScript will know the value "b" should come before value "a" in our array (b is shorter than a that is why we got a +ive number ).

```javascript
function customSort(a, b) {
  return b - a; // Our Array will be sorted in a Decending Order.
}
```

If the Returned Value is Zero then both values a and b are equal and JavaScript will move on to the next pair of values.

### String Values Sorting Based on Length

If we have an array of String Values and We would like to Sort according to the Length of the individual String Values we can use the .length method in our comparator function to sort our Array by each Strings Length.

```javascript
function stringAcendSorting(str1, str2) {
  return str1.length - str2.length; // Our Strings array will be sorted by string lengths in a acendeing order.
}

function stringDecendSorting(str1, str2) {
  return str2.length - str1.length; // Our Strings array will be sorted by string lengths in a decending order.
}
```
