# Rot13

Introduction
-----

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Breakdown
-----

* Take string convert to array
* Iterate through array, check if item is a letter
* if so, advance it 13 places by:
  * using ruby method .next()
* replace item in array
* join array back to a string

After Submitting
-----

* look into the String.tr method

[Link to Kata](https://www.codewars.com/kata/530e15517bc88ac656000716/train/ruby)