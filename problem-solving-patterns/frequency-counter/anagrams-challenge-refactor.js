/*

=====================================================================
ANAGRAMS CHALLENGE USING FREQUENCY COUNTER PATTERN OF PROBLEM SOLVING
=====================================================================

Problem
-------
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, pharse or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples
--------
invoking like this --> validAnagram('', '') should return "true"

invoking like this --> validAnagram('aaz', 'zza') should return "false"

invoking like this --> validAnagram('anagram', 'nagaram') should return "true"

invoking like this --> validAnagram('rat', 'car') should return "false"

invoking like this --> validAnagram('awesome', 'awesom') should return "false" 

invoking like this --> validAnagram('qwerty', 'qeywrt') should return "true" 

invoking like this --> validAnagram('texttwisttime', 'timetwisttext') should return "true" 

*/

const makeFrequencyCounter = (input) => {
  const frequencyCounter = {};

  for (const el of input) {
    frequencyCounter[el] = (frequencyCounter[el] || 0) + 1;
  }

  return frequencyCounter;
};

const validAnagram = (str1, str2) => {
  // Check to see if both strings are of same length if not return false.
  if (str1.length !== str2.length) return false;

  const frequencyCounter1 = makeFrequencyCounter(str1);
  const frequencyCounter2 = makeFrequencyCounter(str2);

  // loop over each counter keys to check if they match and their value matches if not return false

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    else if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }

  // if every thing matches return ture.
  return true;
};

console.log(validAnagram('tar', 'rat')); // true
console.log(validAnagram('arc', 'car')); // false
console.log(validAnagram('elbow', 'below')); // true
console.log(validAnagram('state', 'taste')); // false
console.log(validAnagram('cider', 'cried')); // false
console.log(validAnagram('dusty', 'study')); // true
console.log(validAnagram('night', 'thing')); // true
console.log(validAnagram('inch', 'chin')); // true
