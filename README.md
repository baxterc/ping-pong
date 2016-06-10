
#Ping Pong Pattern Replacer

###A JavaScript Excercise for Epicodus by Charlie Baxter
###Made June 10, 2016


##Description

#####This page takes two different sets of input from the user.  In the first input field, the user provides a single number and the page counts from one up to that number.  The page replaces multiples of 3 with the word "Ping!", multiples of 5 with "Pong!", and multiples of 15 (the product of 3 and 5) with "Pingpong!"  The second set of input fields lets the user determine the range as well as the numbers whose multiples should be pinged and ponged.  The product of the ping and pong numbers gets pingponged.

##Setup

*Clone this repository
*Open in the browser of your choice

##Technologies Used
*JavaScript
*jQuery
*CSS
*Bootstrap
*HTML

###Specifications:

####This program should:
**Display a range of numbers starting from 1 and ending with the user's input**
  *Input Example: 5
  *Output Example: 1, 2, 3, 4, 5

**Replace numbers created in the above range that are divisible by 3 with "ping."
  *Input Example: 6
  *Output Example: 1, 2, ping, 4, 5, ping

**Also replace the numbers that are divisible by 5 with "pong."
  *Input Example: 6
  *Output Example: 1, 2, ping, 4, pong, ping

**Also replace the numbers that are divisible by 15 with "pingpong."**
  *Input Example: 15
  *Output Example: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong

**Display the list of numbers as a list on the page.**
  *Input Example: 5
  *Output Example:
  *  1
  *  2
  *  3
  *  4
  *  5

**Allow the user to enter a range of numbers and numbers to "ping," "pong" and "pingpong" on.**
  *Input Example: Range of 8, ping on 2, pong on 3
  *Output Example: 1, ping, pong, ping, 5, pingpong, 7, 8

**Alert users when they provide incorrect input types.**
  *Input Example: Q
  *Output Example: Sorry, please enter a number.

###Legal
#####Copyright (c) 2016 Charlie Baxter. This software is licensed under the MIT license.
