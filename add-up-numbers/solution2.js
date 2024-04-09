
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