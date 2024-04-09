# Add up the numbers
  Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

  ## Syntax

> The return keyword precedes the expression  `num *(num + 1) / 2,` which is the value returned by the function.

  ### Parameters

`num` Represents the number up to which the function calculates the sum of integers, starting from 1. It is the input parameter of the function.

 ### Return Value: `number`
 The function returns the sum of integers from 1 to num, calculated using the formula `num * (num + 1) / 2.`

 ## Test Cases

 ```js
  describe('when given a large positive number', () => {
    test('should return the correct sum when given a non-negative number', () => {
        expect(addup(1000)).toEqual(500500); 
    });

    test('should return the correct sum', () => {
      expect(addup(5)).toEqual(15); // When num is 1000, expected result is 500500
    });

    test('should return 0 when given a negative number', () => {
        expect(addup(-5)).toEqual(0); // When num is negative, expected result is 0
        
  });
});

