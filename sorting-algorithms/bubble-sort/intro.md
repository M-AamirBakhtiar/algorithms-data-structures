# BUBBLE SORT ALGORITHM O(n^2)

## Algorithm

Using Bubble sort we sort the values one by one, we start by comparing 2 values and if value `a` is bigger than value `b` we swap their places we keep on doing this untill the largest values Bubble up to the end, this process repeats multiple times untill we have a sorted array. Bubble sort is not very efficent in sorting and is not commonly used, however it can be usefull if we have partially sorted data.

Many sorting algorithms use some type of swapping functionality. There are 2 ways we can implement swap

### ES5 Way

```javascript
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
```

### ES6 Way

```javascript
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```
