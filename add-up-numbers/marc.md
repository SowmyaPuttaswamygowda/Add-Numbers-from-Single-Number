[Marc](https://edabit.com/challenge/4gzDuDkompAqujpR)


```js
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
```

# Strategy
    The strategy of this code is to calculate the sum of numbers from 1 to the given number (num). It does this by using a while loop to iterate through each number from 1 to num and adds each number to the sum variable.

## Implementation
 1.The addNumbers function takes a single parameter num.
 2.It initializes two variables, sum to 0 (to store the cumulative sum) and i to 1 (the starting number to begin the iteration).
 3.It enters a while loop that continues iterating as long as i is less than or equal to num.
 4.Inside the loop, it adds the current value of i to the sum and increments i by 1.
 5.After the loop completes, it returns the final value of sum, which contains the sum of numbers from 1 to num.


