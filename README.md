# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

Practice writing different functions to improve problem solving.

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rishavbaral/lotide`

**Require it:**

`const _ = require('@rishavbaral/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first element in array
* `tail(array)`: returns array without first element 
* `middle(array)`: returns middle elements of an array in an array
* `without(...)`: give two arrays and it will return first array without all the values in the second array
* `takeUntil(...)`: parameters is one array and one callback function, iterate through array and add elements sequentially to a new array, until the callback function invokes a true value when given the parameter which is the variable that is iterating through the array.
* `random(...)`: random file i have to tinker with js, to lazy to take it out ;P
* `map(...)`: give it an array and a callback function and itll return a new array where every element is the return value of the callback function when its given every element in the original array
* `letterPositions(...)`: five it a string and it will return an object which lists all letters in the string as a key and then the value will be that letters index position in the string
* `findKeyByValue(...)`: give it an object and a value and it will find the first key that points to that value.
* `findKey(...)`: give it an object and a callb ack function, it will return a key for which when that callback function is called with that key, the value returns true.
* `countOnly(...)`: function which when given an array and an object, it will return the ammount of times the keys of that object appear in the array, only if the values of those keys equal true.
* `countLetters(...)`: give a string and returns an object with keys equal to all unique letters in the string and the value equals number of time that letter appears.

