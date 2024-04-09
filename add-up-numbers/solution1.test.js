'use strict';

import {addUp}from './solution1.js'

describe
describe('when given a large positive number', () => {
  test('should return the correct sum when given a non-negative number', () => {
      expect(addUp(1000)).toEqual(500500); 
  });

  test('should return the correct sum', () => {
    expect(addUp(5)).toEqual(15); // When num is 1000, expected result is 500500
  });

  test('should return 0 when given a negative number', () => {
      expect(addUp(-5)).toEqual(0); // When num is negative, expected result is 0
      
   });
  });





