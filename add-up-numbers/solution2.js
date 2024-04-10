'use strict';

/**
 * Find the sum of N numbers (Sum from 1 to N'th number)
 *
 * @param {number} number - number to find the sum
 * @returns {number} sum of the input number  
 */

  const addNumbers = num => {
    let sum = 0;
    let i = 1;
    // Iterate through numbers from 1 to num and add them to sum
    while (i <= num) {
      sum += i;
      i++;
    }
    return sum;
   };