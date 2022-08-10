//***************************************************************************************************************************************************** */
// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  let result = "";
  if (num1 === num2) {
    result = "both numbers are the same! wuTang";
  } else if (num1 > num2) {
    result = num1;
  } else {
    result = num2;
  }
  return result;
}

//***************************************************************************************************************************************************** */
// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(array) {
  let maxLength = 0;
  let word = "";

  for (let possibleWord = 0; possibleWord < array.length; possibleWord++) {
    if (array[possibleWord].length > maxLength) {
      maxLength = array[possibleWord].length;
      word = array[possibleWord];
    }
  }
  return word;
}

console.log("The largest number in this section is " + maxOfTwoNumbers(5, 3));


//***************************************************************************************************************************************************** */
// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Longer Way iteration#3 with typeOf validator and a for loop
function sumNumbers(aNumberArray) {
  if (!aNumberArray) return null;
  let sum = 0;
  for (let pieceOfArray of aNumberArray) {
    // we are adding "typeof" condition to reuse this function
    // to calculate sum of letters in the array of words

    // we can check the type of elements in the array:
    // console.log(`Type of pieceOfArray: ${typeof pieceOfArray}`);

    if (typeof pieceOfArray === "string") sum += pieceOfArray.length;
    else sum += pieceOfArray;
  }
  return sum;
}
console.log(
  `The sum of all numbers using this function would be ${sumNumbers(numbers)}`
);

// Shortened Way iteration#3 with a for loop
function sumNumbers2(aNumberArray) {
  let sum = 0;
  for (
    let pieceOfArray = 0;
    pieceOfArray < aNumberArray.length;
    pieceOfArray++
  ) {
    sum += aNumberArray[pieceOfArray];
  }
  return sum;
}

console.log(
  `The sum of all numbers using this function would be ${sumNumbers2(numbers)}`
);

// Shortened Way with a forEach Loop
function sumNumbers3(numbers) {
  let result = 0;
  numbers.forEach((element) => {
    result += element;
  });
  return result;
}
console.log(
  `The sum of all numbers using this function would be ${sumNumbers3(numbers)}`
);

// Shortened Way with an Arrow Function
const sumNumbers4 = numbers.reduce((a, b) => a + b, 0);
console.log(
  `The sum of all numbers using this function would be ${sumNumbers4}`
);

// Iteration #3.1 Bonus - No lo tenian que hacer
const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function sum(array) {
  let mixedSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      str = array[i].split("");
      for (let i = 0; i < str.length; i++) {
        mixedSum += str[i].length;
      }
    } else if (array[i] === true) {
      mixedSum += 1;
    } else {
      mixedSum += array[i];
    }
  }
  return mixedSum;
}

console.log(`The Generic Sum is ${sum(mixedArr)}`);


//***************************************************************************************************************************************************** */
// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// iteration#4 with a validator before running the expression
function averageNumbers(array) {
  if (!array) return null;
  else return sumNumbers(array) / array.length;
}
console.log(
  `The average numbers of this function is ${averageNumbers(numbersAvg)}`
);

//iteration4 without check if there is not an array!
function averageNumbers2(array) {
  return sumNumbers(array) / array.length;
}
console.log(
  `The average numbers of this function is ${averageNumbers2(numbersAvg)}`
);

// iteration4 using an arro function
const averageNumbers3 = (array) =>
  !array ? null : sumNumbers(array) / array.length;
console.log(
  `The average numbers of this function is ${averageNumbers3(numbersAvg)}`
);

// iteration4 using a reduce method
const avgNumbers = numbersAvg.reduce(function (a, b) {
  return a + b;
}, 0);
result = avgNumbers / numbersAvg.length;
console.log(`The average numbers of this function is ${result}`);

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// iteration 4 level 2 - function using a conditionalValidator and a simple loop
function averageWordLength(words) {
  if (!words.length) return null;
  let wordLengths = [];
  for (let word of words) {
    wordLengths.push(word.length);
  }
  return averageNumbers(wordLengths);
}
console.log(
  `The average numbers of this function is ${averageWordLength(wordsArr)}`
);

// iteration 4 level 2 - function using a more complex loop
function averageWordLength2(words) {
  let wordsLength = [];
  for (i = 0; i < words.length; i++) {
    wordsLength.push(words[i].length);
  }
  return averageNumbers(wordsLength);
}
console.log(
  `The average numbers of this function is ${averageWordLength2(wordsArr)}`
);

// iteration 4 level 2 - using an arrow function
const averageWordLength3 = (words) => {
  if (!words.length) return null;
  return words.join("").length / words.length;
};
console.log(
  `The average numbers of this function is ${averageWordLength3(wordsArr)}`
);
// Bonus - Iteration #4.3 - using a simple expression to get the total
function avg(array) {
  return sum(array) / array.length;
}
console.log(`The total is ${avg(mixedArr)}`);

// Bonus - Iteration #4.3 - setting up variables with values of 0 and then iterate on top of the variables created
function avg2(mixedArray) {
  let total = 0;
  let avg = 0;
  for (let i = 0; i < mixedArray.length; i++) {
    let total = sum(mixedArray);
    let avg = total / mixedArray.length;
    return avg;
  }
}
console.log(`The total is ${avg2(mixedArr)}`);



//***************************************************************************************************************************************************** */
// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

// iteration 5 - setting up a variable to an empty array and then adding the elements to the array using push
function uniquifyArray(array) {
  let uniqueArray = [];
  array.forEach((i) => {
    if (uniqueArray.indexOf(i) === -1) {
      uniqueArray.push(i);
    }
  });
  return uniqueArray;
}
console.log(`Unique Arrays is ${uniquifyArray(wordsUnique)}`);

// iteration 5 - setting up a variable to an empty array and then adding the elements to the array using push

function uniquifyArray2(array) {
  let uniqueWords = array.filter((element, index) => {
    return array.indexOf(element) === index;
  });
  return uniqueWords;
}
console.log(`Unique Arrays is ${uniquifyArray2(wordsUnique)}`);

// iteration 5 - setting up an arrow function with an empty variable to an empty array and then looping on base of the initial argument with a validator inside the conditional, fuck this is actually a fucking great function !
const uniquifyArray3 = (words) => {
  let uniqueArr = [];
  for (let word of words) {
    if (!uniqueArr.includes(word)) uniqueArr.push(word);
  }
  return uniqueArr;
};
console.log(`Unique Arrays is ${uniquifyArray3(wordsUnique)}`);



//***************************************************************************************************************************************************** */
// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

// iteration 6 - set a function with two arguments, then loop on top of the initial argument which is the array and then write a conditional inside the loop which check if the element being looped
function doesWordExist(arr, word) {
  for (let el of arr) {
    if (el === word) return true;
  }
  return false;
}
console.log(`Iteration 6 is  ${doesWordExist(wordsFind, "truth")}`);

// iteration 6 - setting up a function that takes 2 arguments and then whe use the includeMethod to check if its true
function doesWordExist2(array, word) {
  if (array.includes(word)) {
    return true;
  }
  return false;
}
console.log(`Iteration 6 is  ${doesWordExist2(wordsFind, "truth")}`);

// iteration 6 - really short version
function doesWordExist3(arr, word) {
  return arr.includes(word);
}
console.log(`Iteration 6 is  ${doesWordExist3(wordsFind, "truth")}`);

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];


//***************************************************************************************************************************************************** */
// iteration 7 - using a function that takes 2 arguments and we set the initial count to 0 to iterate on top of it :)
function howManyTimes(arr, word) {
  let count = 0;
  for (let el of arr) {
    if (el === word) count++;
  }
  return count;
}

console.log(`Iteration 7 is  ${howManyTimes(wordsCount, "truth")}`);

//iteration 7 - using a function that takes 2 arguments and we set the initial count to 0 to iterate on top of it :)
function howManyTimes2(array, word) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      count++;
    }
  }

  return count;
}

console.log(`Iteration 7 is  ${howManyTimes2(wordsCount, "truth")}`);

//Iteration 7 - using an arrow function with a conditional first to check if the 2 arguments provided are not present then we use the reduceMethod to iterate
const howManyTimes3 = (wordsCountArray, search) => {
  if (!wordsCountArray.length || !search) return;
  return wordsCountArray.reduce((acc, word) => {
    return (acc += word === search);
  }, 0);
};
console.log(`Iteration 7 is  ${howManyTimes3(wordsCount, "truth")}`);

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

const greatestProduct = (matrix) => {
  let product = 0;

  const numberOfRows = matrix.length;
  const numberOfColumns = matrix[0].length;

  // console.log(numberOfRows);
  // console.log(numberOfColumns)

  for (let i = 0; i < numberOfRows; i++) {
    let row = matrix[i];
    for (let e = 0; e < numberOfColumns - 3; e++) {
      // 0 - 1 - 2 - 3
      // 1 - 2 - 3 - 4
      let rowProduct = row[e] * row[e + 1] * row[e + 2] * row[e + 3];
      if (rowProduct > product) {
        product = rowProduct;
      }
    }
  }

  for (let i = 0; i < numberOfColumns; i++) {
    for (let e = 0; e < numberOfRows - 3; e++) {
      let columnProduct =
        matrix[e][i] * matrix[e + 1][i] * matrix[e + 2][i] * matrix[e + 3][i];
      if (columnProduct > product) {
        product = columnProduct;
      }
    }
  }

  return product;
};
console.log(greatestProduct(matrix));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}
