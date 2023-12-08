/* program to generate a multiplication table
upto a range */

// take number input from the user
const number = parseInt(prompt('Enter an integer: '));

// take range input from the user
const range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
//  recursive function using loop 
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(10));

  // Function that outputs the value one
const outputOne = () => {
    console.log(1);
  };
  
  // Function that outputs the value two
  const outputTwo = () => {
    console.log(2);
  };
  
  // Function that outputs the value three and invokes the first two functions
  const outputThreeAndInvoke = () => {
    console.log(3);
  
    // Invoking the first two functions
    outputOne();
    outputTwo();
  };
  
  // Function that outputs the word four
  const outputFour = () => {
    console.log('four');
  };
  
  // Using setTimeout to invoke functions with a delay
  setTimeout(outputOne, 0); // Invokes the first function immediately
  setTimeout(outputThreeAndInvoke, 1000); // Invokes the third function after a delay of 1000 milliseconds (1 second)
  
  // Invoking the fourth function
  outputFour();
  

