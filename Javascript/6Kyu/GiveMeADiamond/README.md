# Give me a diamond

Introduction
-----

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"

Breakdown
-----

* Deal with edge cases (even, negative)
* 1 = 1 star + \n
* 3 = 1 space 1 star + \n + 3 star + \n + 1 space 1 star + \n

After Submitting
-----

* Took a while to conceptualise how to do this, eventually split it into three different parts, the top bottom and middle. Middle was easy enough, top and bottom were a little bit more difficult and involved a bit of trial and error trying to conceptualise how the amount of spaces and stars related to which iteration of which loop.
* A lot of the best answers to this are similarly convoluted mathematically, so not much else to do here.

[Link to Kata](https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript)
