# Where my anagrams at?

Introduction
-----

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
```
'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false#
```
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

```
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```

Note for Go
For Go: Empty string slice is expected when there are no anagrams found.


Breakdown
-----

* Sort both word and each word in the words array
* if word matches word, add to new array

After Submitting
-----

Overall quite happy with this one, although looking at the best practise result on codewars:

* using String.prototype.sort gives the ability to use .sort() on a string. Neat.
* look at filter with a callback function.

[Link to Kata](https://www.codewars.com/kata/523a86aa4230ebb5420001e1)