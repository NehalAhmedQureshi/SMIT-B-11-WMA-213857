/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = (operations) => {
      operations = ["--X","X++","X++"]
      let result = 0
  
      for (let i = 0; i < operations.length; i++) {
          if (operations[i] === 'X++') {
              result++
          } else if (operations[i] === '++X') {
              result++
          } else if (operations[i] === '--X') {
              result--
          } else if (operations[i] === 'X--') {
              result--
          }
          
      }
      // return result;
      console.log(result);
  };

  console.log(finalValueAfterOperations());