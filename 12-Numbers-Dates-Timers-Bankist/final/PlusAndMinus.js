'use strict'

console.log('1234' + 56);
console.log(1234 + '56')

/*
Plus (+) Type Coercion:
Concatenation of Strings:

The + operator is commonly used for concatenating strings. When at least one of the operands is a string, JavaScript performs a type coercion to convert non-string values to strings, and then concatenates them.
Example:
javascript
Copy code
const str = 'Hello ' + 'World'; // Result: 'Hello World'
Addition of Numbers:

When both operands are numbers, the + operator performs addition.
Example:
javascript
Copy code
const sum = 2 + 3; // Result: 5
Implicit Type Coercion:

JavaScript may automatically convert values to a common type in certain situations.
Example:
javascript
Copy code
const numStr = '5';
const num = 2;

const result = numStr + num; // Result: '52' (num is implicitly coerced to a string)
Minus (-) Type Coercion:
Subtraction of Numbers:

The - operator is used for subtraction when both operands are numbers.
Example:
javascript
Copy code
const difference = 7 - 3; // Result: 4
Implicit Type Coercion to Numbers:

When a string that represents a valid number is involved in a subtraction operation, JavaScript will convert it to a number.
Example:
javascript
Copy code
const numStr = '5';
const num = 2;

const result = numStr - num; // Result: 3 (numStr is implicitly coerced to a number)
NaN (Not a Number):

If the string cannot be converted to a valid number, JavaScript will return NaN.
Example:
javascript
Copy code
const result = 'Hello' - 5; // Result: NaN (string cannot be converted to a number)
Considerations:
Type coercion can sometimes lead to unexpected behavior, so it's important to be aware of it when working with mixed data types.
Explicit type conversion can be used to ensure that data is treated in the desired format.
Be cautious with non-obvious coercions, as they can lead to bugs that are hard to debug.
Understanding type coercion is crucial for writing reliable JavaScript code. It helps you anticipate how the language will handle different types of data in various operations.
 */



