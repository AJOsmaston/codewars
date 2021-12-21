# Move Zeros

Brief
-----

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

Method
-----

* Start from last element of array
* Work backwards through array until get to first element
* Each element, check if a 0
* If 0, delete element and move to end - otherwise go to next element.

[Link to Kata](https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript)
