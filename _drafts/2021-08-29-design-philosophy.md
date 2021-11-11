---
layout: post
title:  "glibc strlen deep dive"
date:   2021-09-21 00:00:00 -0000
category: techtalk
tags: c optimization not-my-code
---

# glibc strlen deep dive

You ever taken a look at a `strlen` implementation? Well, let's first think about how you or I might implement this, it might look something like...

```c
/* return the length of a given string */
unsigned int strlen(const char* str) {
    unsigned int len = 0;
    for(unsigned int i = 0;;i++) {
        if(str[i] == 0) return i;
    }
}
```

This definitely works, it just counts characters until it reads a null byte, and it doesn't bother with the case that we read more than *unsigned int* characters. But alas, low level programmers are a different beast, and as such this implementation wasn't good enough for the [GNU C Library](https://github.com/lattera/glibc). Let's take a peek at theirs...

```c
size_t
STRLEN (const char *str)
{
  const char *char_ptr;
  const unsigned long int *longword_ptr;
  unsigned long int longword, himagic, lomagic;

  /* Handle the first few characters by reading one character at a time.
     Do this until CHAR_PTR is aligned on a longword boundary.  */
  for (char_ptr = str; ((unsigned long int) char_ptr
			& (sizeof (longword) - 1)) != 0;
       ++char_ptr)
    if (*char_ptr == '\0')
      return char_ptr - str;

  /* All these elucidatory comments refer to 4-byte longwords,
     but the theory applies equally well to 8-byte longwords.  */

  longword_ptr = (unsigned long int *) char_ptr;

  /* Bits 31, 24, 16, and 8 of this number are zero.  Call these bits
     the "holes."  Note that there is a hole just to the left of
     each byte, with an extra at the end:
     bits:  01111110 11111110 11111110 11111111
     bytes: AAAAAAAA BBBBBBBB CCCCCCCC DDDDDDDD
     The 1-bits make sure that carries propagate to the next 0-bit.
     The 0-bits provide holes for carries to fall into.  */
  himagic = 0x80808080L;
  lomagic = 0x01010101L;
  if (sizeof (longword) > 4)
    {
      /* 64-bit version of the magic.  */
      /* Do the shift in two steps to avoid a warning if long has 32 bits.  */
      himagic = ((himagic << 16) << 16) | himagic;
      lomagic = ((lomagic << 16) << 16) | lomagic;
    }
  if (sizeof (longword) > 8)
    abort ();

  /* Instead of the traditional loop which tests each character,
     we will test a longword at a time.  The tricky part is testing
     if *any of the four* bytes in the longword in question are zero.  */
  for (;;)
    {
      longword = *longword_ptr++;

      if (((longword - lomagic) & ~longword & himagic) != 0)
	{
	  /* Which of the bytes was the zero?  If none of them were, it was
	     a misfire; continue the search.  */

	  const char *cp = (const char *) (longword_ptr - 1);

	  if (cp[0] == 0)
	    return cp - str;
	  if (cp[1] == 0)
	    return cp - str + 1;
	  if (cp[2] == 0)
	    return cp - str + 2;
	  if (cp[3] == 0)
	    return cp - str + 3;
	  if (sizeof (longword) > 4)
	    {
	      if (cp[4] == 0)
		return cp - str + 4;
	      if (cp[5] == 0)
		return cp - str + 5;
	      if (cp[6] == 0)
		return cp - str + 6;
	      if (cp[7] == 0)
		return cp - str + 7;
	    }
	}
    }
}
```

Okay this is a lot to take in, like a lot, a lot, like so much that I'm almost certain you just scrolled past it without reading it (that's what I would have done, brownie points if your attention span is longer than mine). At a thousand foot level, the glibc version aligns reading to a longword boundary and then tests for a null byte within a long instead of testing each individual byte one after the other. For funsies let's look a bit closer at each portion of this function, let's start with the boundary alignment: 

```c
// code rearranged for readability

/* Handle the first few characters by reading one character at a time.
     Do this until CHAR_PTR is aligned on a longword boundary.  */
for(char_ptr = str; ((unsigned long int) char_ptr & (sizeof (longword) - 1)) != 0; ++char_ptr) {
    if (*char_ptr == '\0') {
        return char_ptr - str;
    }
}
```

Basically:
 * We create a char pointer, pointing at the beginning of the string
 * then in a loop
    * check if the pointer is divisible 
    * increment the pointer 