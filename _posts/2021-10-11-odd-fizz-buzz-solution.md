---
layout: post
title:  "Taking a Look at an Odd FizzBuzz Solution"
description: "Let's reverse engineer a strange FizzBuzz solution written in C"
date:   2021-10-11 00:00:00 -0000
category: RE
tags: c++ not-my-code reverse-engineering
---

<!-- {% asset blog/09-20-21/fizzbuzz.png %} -->

# Taking a Look at an Odd FizzBuzz Solution 

<br />

I recently came across the following FizzBuzz solution:

```cpp
#include <cstdio>
#include <cstdint>

int main()
{
    for(size_t i = 1; i < 50; ++i) {
        printf("%zu\n\0\0\0\0Fizz\n\0\0\0Buzz\n\0\0\0FizzBuzz\n" 
	    + (((0x1241843 >> ((i % 15) * 2)) & 0b11) * 8), i);
    }
}
```

*Source: [https://wunkolo.github.io/post/2020/02/first-post/](https://wunkolo.github.io/post/2020/02/first-post/)*

For those of you unaware, FizzBuzz is a simple challenge: iterate over a given range of numbers and 
 - if the current number is divisible by three, print "Fizz"
 - if divisible by five, print "Buzz"
 - if divisible by both three and five, print "FizzBuzz"
 - otherwise, print the current number.

This solution is rather fast and compiles to only 24 instructions, but it's also a bit of a tricky solution to wrap your head around the first time you look at it. It seems to be a mess of random bitwise operations added to an odd-looking string. Let's step through how it works.

## First Things First

When it comes to odd FizzBuzz solutions, the nature of FizzBuzz output is something that can be abused rather easily. FizzBuzz has a sort of "period" of 15, if we replace number output with N, it always follows the following pattern:
```
(N+0 )  FizzBuzz
(N+1 )  N
(N+2 )  N
(N+3 )  Fizz
(N+4 )  N
(N+5 )  Buzz
(N+6 )  Fizz
(N+7 )  N
(N+8 )  N
(N+9 )  Fizz
(N+10)  Buzz
(N+11)  N
(N+12)  Fizz
(N+13)  N
(N+14)  N
...repeating forever
```
The reason that this is important is that this pattern is small enough to more or less hard code and then reference with a quick `i % 15`. 

In the case of this FizzBuzz solution, this is encoded in the hex number `0x1241843`, which makes a little more sense to look at in binary, `b1001001000001100001000011`. If we break apart this number into 2-bit chunks (considering leading zeros), we can see a familiar pattern emerge:
```
(00001001001000001100001000011)
11 (FizzBuzz)
00 (N)
00 (N)
01 (Fizz)
00 (N) 
10 (Buzz)
01 (Fizz)
00 (N)
00 (N)
01 (Fizz)
10 (Buzz)
00 (N)
01 (Fizz)
00 (N)
00 (N)
```
This is the exact pattern of the 15 wide period that was mentioned earlier. Since at each number the output is one of four different options (Fizz, Buzz, FizzBuzz, or N), we can encode the state for each place of the 15 in only two bits. 

## C/C++ Specifics

The next thing to consider is the C/C++ specific part of this solution: printf. Since you aren't required to pass a string length to printf, it simply reads the array of chars until it encounters a value of 0, at which point the string terminates. This can be abused to effectively encode multiple substrings in a single string constant. 

In our case,

```
"%zu\n\0\0\0\0Fizz\n\0\0\0Buzz\n\0\0\0FizzBuzz\n"
```
Contains substrings:
```
"%zu\n" (printf format specifier for unsigned size_t)
"Fizz\n"
"Buzz\n"
"FizzBuzz\n"
```
All but the last of these substrings are padded with extra zeros to make them each a length of eight, this is useful because it allows us to reference each of the four substrings by doing:
```cpp
string_ptr + (substr_index * 8)
```
This is used in the current solution to grab the necessary substring after doing some bitwise math with the current number. String literals can be treated the same as string pointers, so in the above example, we increment the string literal's pointer directly.

I will also mention that you can supply any number of arguments to printf and they will only be used if there is a format specifier placed in the given string, so we can always supply N (our current number) and then only print it if we use the substring that contains a format specifier. 

## Putting it All Together

Taking everything mentioned above, these are the steps taken in the above example:

First, limit the current number to our period of 15,
```cpp
(i % 15)
```
multiply it by 2, since we are grabbing 2 bits from the magic number,
```cpp
(i % 15) * 2
```
shift our magic number over so our required bits are in the two least significant positions,
```cpp
0x1241843 >> ((i % 15) * 2)
```
AND out our needed bits,
```cpp
(0x1241843 >> ((i % 15) * 2)) & 0b11
```
multiply the retrieved bits by 8 to get our substring position,
```cpp
((0x1241843 >> ((i % 15) * 2)) & 0b11) * 8
```
then lastly, increment our string of substrings to the position needed.
```cpp
"%zu\n\0\0\0\0Fizz\n\0\0\0Buzz\n\0\0\0FizzBuzz\n" 
	+ ((0x1241843 >> ((i % 15) * 2)) & 0b11) * 8
```
The rest is supplying our current N regardless, and then letting printf do everything else.

<br />

*This is a rehost of a blog I originally submitted to [dev.to](https://dev.to/shensd/taking-a-look-at-an-odd-fizzbuzz-solution-3hca).*