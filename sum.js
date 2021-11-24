const args = process.argv;

const sumOfCleanNumbers = function (listOfNumbers){
  let total = 0;
  for (const currentNumber of listOfNumbers){
    const parsedNumbers = Number(currentNumber);
    const myNymberIsNaN = Number.isNaN(parsedNumbers);
    if(!myNymberIsNaN){
      total += parsedNumbers;
    }
  }
  console.log(total);
  return total;
};

const result = sumOfCleanNumbers(args);
